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
import { Box, Stack } from '@mui/material';


const AccordionInfo = () => {

      const [expanded, setExpanded] = React.useState(false);
    
        const handleExpansion = () => {
            setExpanded((prevExpanded) => !prevExpanded);
        };
  return (
    <>
              <Accordion
                style={{background:'##F8FAFC',boxShadow:"none" ,marginBottom:"10px",border:'0 !important'}}
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
                    <Typography component="span">Features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body2' >
                    <Typography>Prpium 80% cotton, 20% polyester blend</Typography>
                    <Typography>Soft fleece-pned interior</Typography> 
                    <Typography>Adjustable drawstring hood</Typography>
                    <Typography>Kangaroo pocket for essentials</Typography>
                    <Typography>Ribbed cuffs and hem for a snug fit</Typography>
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  style={{background:'##F8FAFC',boxShadow:"none" ,marginBottom:"10px",border:'0 !important'}}   >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Specifications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{width:{md:"40%",xs:"90%"}}}>
                    <Stack direction={'row'} justifyContent={'space-between'} p={1} mb={1} borderBottom={"1px solid #e4e4e4"}>
                        <Typography variant='body2'>Weight</Typography>
                        <Typography variant='body2'>450g (Size M)</Typography>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-between'} p={1} mb={1} borderBottom={"1px solid #e4e4e4"}>
                        <Typography variant='body2'>Material</Typography>
                        <Typography variant='body2'>80/20 Cotton-Poly Blend</Typography>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-between'} p={1} mb={1} borderBottom={"1px solid #e4e4e4"}>
                        <Typography variant='body2'>Care</Typography>
                        <Typography variant='body2'>	Machine wash cold, tumble dry low</Typography>
                    </Stack>
                  </Box>
                </AccordionDetails>
            </Accordion>
    </>
  )
}

export default AccordionInfo