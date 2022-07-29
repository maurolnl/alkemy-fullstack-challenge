import {IconButton, Tooltip} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import React from "react";

import {gradients} from "../../theme";

interface Props {
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  onClick?: () => void;
  ariaLabel?: string;
  variant?: "hover" | "active";
  url?: string;
  isStrong?: boolean;
  hasLabel: boolean;
}

const GradientButton: React.FC<Props> = ({
  icon,
  ariaLabel,
  onClick,
  variant,
  url,
  isStrong,
  hasLabel,
}) => {
  const isButtonActive = variant === "active" ? gradients.pink_accent : "brand.pink.100";
  const backgroundColor = isStrong ? "brand.pink.400" : "brand.pink.100";

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
                    bgGradient: gradients.pink_strong,
                  }}
                  aria-label={ariaLabel ? ariaLabel : ""}
                  backgroundColor={backgroundColor}
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
                  bgGradient: gradients.pink_strong,
                }}
                aria-label={ariaLabel ? ariaLabel : ""}
                backgroundColor={backgroundColor}
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
                  bgGradient: gradients.pink_strong,
                }}
                aria-label={ariaLabel ? ariaLabel : ""}
                backgroundColor={backgroundColor}
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
                bgGradient: gradients.pink_strong,
              }}
              aria-label={ariaLabel ? ariaLabel : ""}
              backgroundColor={backgroundColor}
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
