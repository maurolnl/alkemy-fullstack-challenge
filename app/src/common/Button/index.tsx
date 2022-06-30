import {IconButton, Tooltip} from "@chakra-ui/react";
import {Link} from "react-router-dom";
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
  const isButtonActive =
    variant === "active"
      ? "linear-gradient(120deg, rgba(240,215,42,1) 0%, rgba(224,221,85,1) 48%, rgba(134,231,222,1) 100%)"
      : "brand.pink.100";
  const lightPinkGradient =
    "linear-gradient(120deg, rgba(210,149,174,1) 0%, rgba(224,82,99,1) 100%)";

  return (
    <>
      {url ? (
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
              <Link to={url}>
                <IconButton
                  _focus={{
                    boxShadow: "0 0 0 2px rgba(224,82,99,1)",
                  }}
                  _hover={{
                    bgGradient: lightPinkGradient,
                  }}
                  aria-label={ariaLabel ? ariaLabel : ""}
                  backgroundColor="brand.pink.100"
                  bgGradient={isButtonActive}
                  icon={icon}
                />
              </Link>
            </Tooltip>
          ) : (
            <Link to={url}>
              <IconButton
                _focus={{
                  boxShadow: "0 0 0 2px rgba(224,82,99,1)",
                }}
                _hover={{
                  bgGradient: lightPinkGradient,
                }}
                aria-label={ariaLabel ? ariaLabel : ""}
                backgroundColor="brand.pink.100"
                bgGradient={isButtonActive}
                icon={icon}
              />
            </Link>
          )}
        </>
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
                  bgGradient: lightPinkGradient,
                }}
                aria-label={ariaLabel ? ariaLabel : ""}
                backgroundColor="brand.pink.100"
                bgGradient={isButtonActive}
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
                bgGradient: lightPinkGradient,
              }}
              aria-label={ariaLabel ? ariaLabel : ""}
              backgroundColor="brand.pink.100"
              bgGradient={isButtonActive}
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
