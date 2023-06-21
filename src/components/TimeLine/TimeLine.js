import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(2),
	},
	card: {
		marginBottom: theme.spacing(2),
		width: '100%',
		maxWidth: '500px',
		backgroundColor: '#fff',
		boxShadow:
			'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
	},
	title: {
		fontWeight: 'bold',
		fontSize: '24px',
		lineHeight: '32px',
		letterSpacing: '0.02em',
		color: '#000',
		marginBottom: '8px',
	},
	subtitle: {
		fontSize: '16px',
		lineHeight: '24px',
		letterSpacing: '0.02em',
		color: '#424242',
		marginBottom: '8px',
	},
	text: {
		fontSize: '14px',
		lineHeight: '22px',
		letterSpacing: '0.02em',
		color: '#424242',
	},
}));

const TimeLine = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);

	const handleStepClick = (step) => {
		setActiveStep(step);
	};

	return (
		<div className={classes.root}>
			<motion.div
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ duration: 0.6 }}
			>
				<Card className={classes.card}>
					<CardContent>
						<Typography className={classes.title}>Software Engineer</Typography>
						<Typography className={classes.subtitle}>2018 - Present</Typography>
						<Typography className={classes.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							euismod, sapien vel bibendum bibendum, velit sapien bibendum
							sapien, vel bibendum sapien sapien vel bibendum bibendum, velit
							sapien bibendum sapien, vel bibendum sapien.
						</Typography>
					</CardContent>
				</Card>
			</motion.div>
			<motion.div
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				<Card className={classes.card}>
					<CardContent>
						<Typography className={classes.title}>Graphic Designer</Typography>
						<Typography className={classes.subtitle}>2016 - 2018</Typography>
						<Typography className={classes.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							euismod, sapien vel bibendum bibendum, velit sapien bibendum
							sapien, vel bibendum sapien sapien vel bibendum bibendum, velit
							sapien bibendum sapien, vel bibendum sapien.
						</Typography>
					</CardContent>
				</Card>
			</motion.div>
			<motion.div
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ duration: 0.6, delay: 0.4 }}
			>
				<Card className={classes.card}>
					<CardContent>
						<Typography className={classes.title}>Web Developer</Typography>
						<Typography className={classes.subtitle}>2014 - 2016</Typography>
						<Typography className={classes.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							euismod, sapien vel bibendum bibendum, velit sapien bibendum
							sapien, vel bibendum sapien sapien vel bibendum bibendum, velit
							sapien bibendum sapien, vel bibendum sapien.
						</Typography>
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
};

export default TimeLine;
