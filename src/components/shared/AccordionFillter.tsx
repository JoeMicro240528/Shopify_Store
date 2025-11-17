import * as React from 'react';
import Accordion, {
    type AccordionSlots,
    accordionClasses,
} from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import { Box } from '@mui/material';

export default function AccordionFillter() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    const marks = [
        {
            value: 0,
            label: '$0',
        },
        {
            value: 100,
            label: '$100',
        },
    ];

    function valuetext(value: number) {
        return `${value}°`;
    }

    return (
        <div>
            <Accordion
                style={{background:'#F4F4F5',boxShadow:"none"}}
                expanded={expanded}
                onChange={handleExpansion}
                slots={{ transition: Fade as AccordionSlots['transition'] }}
                slotProps={{ transition: { timeout: 400 } }}
                sx={[
                    
                    expanded
                        ? {
                            [`& .${accordionClasses.region}`]: {
                                height: 'auto',
                            },
                            [`& .${accordionDetailsClasses.root}`]: {
                                display: 'block',
                            },
                        }
                        : {
                            [`& .${accordionClasses.region}`]: {
                                height: 0,
                            },
                            [`& .${accordionDetailsClasses.root}`]: {
                                display: 'none',
                            },
                        },
                ]}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup color='#4B5568'>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Sneakers" />
                        <FormControlLabel control={<Checkbox />} label="Boots" />
                        <FormControlLabel control={<Checkbox />} label="Loafers" />
                        <FormControlLabel control={<Checkbox />} label="Sandals" />
                    </FormGroup>

                </AccordionDetails>
            </Accordion>
            <Accordion    style={{background:'#F4F4F5',boxShadow:"none" , padding:'0 !important'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Brand</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <FormGroup color='#4B5568'>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Brand A" />
                            <FormControlLabel control={<Checkbox />} label="Brand B" />
                            <FormControlLabel control={<Checkbox />} label="Brand C" />
                        </FormGroup>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion   style={{background:'#F4F4F5',boxShadow:"none"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography component="span">Price Range</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <Slider
                          sx={{ color: 'primary', width: '100%' }}
                            aria-label="Always visible"
                            defaultValue={30}
                            getAriaValueText={valuetext}
                            step={10}
                            marks={marks}
                            valueLabelDisplay="on"
                        />
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}