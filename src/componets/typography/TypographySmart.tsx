import React, {useMemo} from 'react';
import {Box, IconButton, styled, Tooltip, Typography as TypographyMUI} from "@mui/material";
import {TypographyPropsVariantOverrides} from "@mui/material/Typography/Typography";
import {OverridableStringUnion} from "@mui/types";
import {Variant} from "@mui/material/styles/createTypography";
import {VoiceEnum} from "../../data/enums/Voice";
import {WordSoundService} from "../../data/services/WordSoundService";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import {Lang} from "../../data/enums/Lang";

const wordSoundService = new WordSoundService()

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

    async function play() {
        if (text){
            try {
                const audio = await wordSoundService.getAudio({
                    text: text,
                    lang: Lang.EN,
                    voice: VoiceEnum.MALE_1
                })
                await audio.play()
            } catch (e) {
                console.error(e)
            } finally {
            }
        }
    }

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
            {childrenMemo}
            <ButtonContainer>
                <Tooltip title={'Play'} onClick={play}>
                    <IconButton color={'primary'}>
                        <VolumeUpIcon style={{fontSize: 15}}/>
                    </IconButton>
                </Tooltip>
            </ButtonContainer>
            <br/>
        </ContainerStyled>
    );
};

const ContainerStyled = styled('span')({

})

const ButtonContainer = styled('span')({

})

export default TypographySmart;