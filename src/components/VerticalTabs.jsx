import * as React from "react";
import "../stylesheets/fitness.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

function VerticalTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="tabs-container">
			<Box
				sx={{
					flexGrow: 1,
					bgcolor: "#EEEDED",
					display: "flex",
					height: "50vh",
					width: "90vw",
					borderRadius: 10,
				}}
			>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="weekly schedule"
					sx={{ borderRight: 1, borderColor: "divider" }}
				>
					<Tab label="Monday" {...a11yProps(0)} />
					<Tab label="Tuesday" {...a11yProps(1)} />
					<Tab label="Wednesday" {...a11yProps(2)} />
					<Tab label="Thursday" {...a11yProps(3)} />
					<Tab label="Friday" {...a11yProps(4)} />
					<Tab label="Saturday" {...a11yProps(5)} />
					<Tab label="Sunday" {...a11yProps(6)} />
				</Tabs>
				<TabPanel value={value} index={0}>
					<button>
						Open WOD Basic <br></br> 10:00 - 11:00
					</button>
					<button>
						Open WOD Beginner <br></br> 18:00 - 19:00
					</button>
					<button>
						Open WOD Basic <br></br> 19:15 - 20:15
					</button>
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
				<TabPanel value={value} index={3}>
					Item Four
				</TabPanel>
				<TabPanel value={value} index={4}>
					Item Five
				</TabPanel>
				<TabPanel value={value} index={5}>
					Item Six
				</TabPanel>
				<TabPanel value={value} index={6}>
					Item Seven
				</TabPanel>
			</Box>
		</div>
	);
}

export default VerticalTabs;
