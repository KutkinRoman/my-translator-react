import React from 'react';
import {Typography} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {TypographyTypeMap} from "@mui/material/Typography/Typography";

interface TypographyTransProps extends OverridableComponent<TypographyTypeMap> {

}

const TypographyTrans = (props: TypographyTransProps) => {
    return (
        <Typography {...props}/>
    );
};

export default TypographyTrans;