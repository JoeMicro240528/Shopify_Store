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
type TFilters = {
    category: string,
    minPrice: number,
    maxPrice: number
}
export default function AccordionFillter({ filters, setFilters }: { filters: TFilters, setFilters: React.Dispatch<React.SetStateAction<TFilters>> }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    const marks = [
        {
            value: 5,
            label: '$5',
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
                style={{ background: '#F4F4F5', boxShadow: "none" }}
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
                        <select value={filters.category} style={{ width: '100%', color: '#4B5568', backgroundColor: '#F4F4F5', borderRadius: '5px', padding: '5px', border: 'none' }} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilters({ ...filters, category: e.target.value })}>
                            <option style={{ padding: '5px', color: '#4B5568', backgroundColor: '#F4F4F5', borderBottom: '1px solid #4B5568' }} value="clothes">clothes</option>
                            <option style={{ padding: '5px', color: '#4B5568', backgroundColor: '#F4F4F5', borderBottom: '1px solid #4B5568' }} value="shoes">shoes</option>
                            <option style={{ padding: '5px', color: '#4B5568', backgroundColor: '#F4F4F5', borderBottom: '1px solid #4B5568' }} value="electronics">electronics</option>
                            <option style={{ padding: '5px', color: '#4B5568', backgroundColor: '#F4F4F5', borderBottom: '1px solid #4B5568' }} value="furniture">furniture</option>
                            <option style={{ padding: '5px', color: '#4B5568', backgroundColor: '#F4F4F5', borderBottom: '1px solid #4B5568' }} value="miscellaneous">miscellaneous</option>
                        </select>
                    </FormGroup>

                </AccordionDetails>
            </Accordion>
            <Accordion style={{ background: '#F4F4F5', boxShadow: "none", padding: '0 !important' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Brand</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <FormGroup color='#4B5568' sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label='Apple' />
                            <FormControlLabel control={<Checkbox />} label="LG" />
                            <FormControlLabel control={<Checkbox />} label="Samsung" />
                            <FormControlLabel control={<Checkbox />} label="Zara" />
                            <FormControlLabel control={<Checkbox />} label="H&M" />
                        </FormGroup>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ background: '#F4F4F5', boxShadow: "none" }}>
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
                            value={filters.maxPrice}
                            onChange={(_, value) => {
                                setFilters({ ...filters, maxPrice: value });
                            }}
                        />
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}