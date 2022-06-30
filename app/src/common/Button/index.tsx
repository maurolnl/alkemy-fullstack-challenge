import {IconButton, Link, Tooltip} from "@chakra-ui/react";
import React from "react";

interface Props {
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  onClick?: () => void;
  ariaLabel?: string;
  variant?: "hover" | "active";
  url?: string;
  isExternal?: boolean;
  hasLabel: boolean;
}

const GradientButton: React.FC<Props> = ({
  icon,
  ariaLabel,
  onClick,
  variant,
  url,
  isExternal,
  hasLabel,
}) => {
  return (
    <>
      {url ? (
        <Link href={url} isExternal={isExternal}>
          <IconButton
            _focus={{
              boxShadow: "0 0 0 2px rgba(224,82,99,1)",
            }}
            _hover={{
              bgGradient: "linear-gradient(120deg, rgba(210,149,174,1) 0%, rgba(224,82,99,1) 100%)",
            }}
            aria-label={ariaLabel ? ariaLabel : ""}
            backgroundColor="brand.pink.100"
            icon={icon}
          />
        </Link>
      ) : (
        <>
          {hasLabel ? (
            <Tooltip
              bg="neutral.pink_black"
              border="2px solid"
              borderColor="brand.pink.200"
              borderRadius="md"
              label={ariaLabel}
              openDelay={50}
            >
              <IconButton
                _focus={{
                  boxShadow: "0 0 0 2px rgba(224,82,99,1)",
                }}
                _hover={{
                  bgGradient:
                    "linear-gradient(120deg, rgba(210,149,174,1) 0%, rgba(224,82,99,1) 100%)",
                }}
                aria-label={ariaLabel ? ariaLabel : ""}
                backgroundColor="brand.pink.100"
                bgGradient={
                  variant === "active"
                    ? "linear-gradient(120deg, rgba(240,215,42,1) 0%, rgba(224,221,85,1) 48%, rgba(134,231,222,1) 100%)"
                    : "brand.pink.100"
                }
                cursor="initial"
                icon={icon}
                onClick={onClick}
              />
            </Tooltip>
          ) : (
            <IconButton
              _focus={{
                boxShadow: "0 0 0 2px rgba(224,82,99,1)",
              }}
              _hover={{
                bgGradient:
                  "linear-gradient(120deg, rgba(210,149,174,1) 0%, rgba(224,82,99,1) 100%)",
              }}
              aria-label={ariaLabel ? ariaLabel : ""}
              backgroundColor="brand.pink.100"
              bgGradient={
                variant === "active"
                  ? "linear-gradient(120deg, rgba(240,215,42,1) 0%, rgba(224,221,85,1) 48%, rgba(134,231,222,1) 100%)"
                  : "brand.pink.100"
              }
              cursor="initial"
              icon={icon}
              onClick={onClick}
            />
          )}
        </>
      )}
    </>
  );
};

export default GradientButton;
