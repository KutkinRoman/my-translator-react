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
}

type TextType = 'default' | 'primary'

const TypographySmart = ({text, variant}: TypographyTransProps) => {

    const childrenMemo = useMemo(() => {
        if (text) {
            const chars = []
            let type: TextType = 'default'
            for (let i = 0; i < text.length; i++) {
                const char = text[i]
                if (char === '{') {
                    type = 'primary'
                    continue
                }
                if (char === '}') {
                    type = 'default'
                    continue
                }
                chars.push(
                    <TypographyMUI
                        color={type}
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
            {childrenMemo}
        </ContainerStyled>
    );
};

const ContainerStyled = styled('span')({})

export default TypographySmart;