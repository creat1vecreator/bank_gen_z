import * as React from 'react';
import {useState} from 'react';
import {styled} from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
export const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

export const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon sx={{
            fontSize: '1.5rem',
            marginRight: '10px',

        }}/>}
        {...props}
    />
))(({theme}) => ({}));

export const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({}));

export function CustomizedAccordions({DetailDay}) {
    const [expanded, setExpanded] = useState('panel1');
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState('panel3');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const handleChange1 = (panel) => (event, newExpanded) => {
        setExpanded1(newExpanded ? panel : false);
    };
    const handleChange2 = (panel) => (event, newExpanded) => {
        setExpanded2(newExpanded ? panel : false);
    };

    return (
        <div>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    Сегодня 11457,56 ₽
                </AccordionSummary>
                <AccordionDetails>
                    <DetailDay name={'Хачапурия'} sum={'1457,56 ₽'} check={true}/>
                    <DetailDay name={'Пятёрочка'} sum={'457,56 ₽'}/>
                    <DetailDay name={'Пятёрочка'} sum={'457,56 ₽'}/>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded1 === 'panel2'} onChange={handleChange1('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">

                    Вчера 11457,56 ₽
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded2 === 'panel3'} onChange={handleChange2('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    20.03
                </AccordionSummary>
                <AccordionDetails>
                    <DetailDay name={'MAGAZIN U DOMA'} sum={'100 ₽'} />
                        <DetailDay name={'Пятёрочка'} sum={'457,56 ₽'}/>
                        <DetailDay name={'Пятёрочка'} sum={'457,56 ₽'}/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
