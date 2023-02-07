import React, {useMemo} from 'react';
import {styled, Typography as TypographyMUI} from "@mui/material";
import {TypographyPropsVariantOverrides} from "@mui/material/Typography/Typography";
import {OverridableStringUnion} from "@mui/types";
import {Variant} from "@mui/material/styles/createTypography";

/** Highlight text
 *
 * Primary color: {text} | I {am} (= I’{m}) from Italy.
 *
 * */

interface TypographyTransProps {
    text?: string,
    variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>;

    color?: ColorType
}

type ColorType = 'default' | 'primary' | any

const TypographySmart = ({text, variant, color}: TypographyTransProps) => {

    const childrenMemo = useMemo(() => {
        if (text) {
            const chars = []
            let colorType: any = color
            for (let i = 0; i < text.length; i++) {
                const char = text[i]
                if (char === '{') {
                    colorType = 'primary'
                    continue
                }
                if (char === '}') {
                    colorType = color
                    continue
                }
                chars.push(
                    <TypographyMUI
                        color={colorType}
                        variant={variant}
                        component={'span'}
                        children={char}
                    />)
            }
            return chars
        }
        return null
    }, [text])

    return (
        <ContainerStyled>
            {childrenMemo}<br/>
        </ContainerStyled>
    );
};

const ContainerStyled = styled('span')({})

export default TypographySmart;