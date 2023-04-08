import React from 'react';
import { Button, SearchBar } from '@utd-argo/ux-master-library';
import { AppBar, Toolbar, Typography, Box, Divider } from '@mui/material';

const data = {
	'Prev Close': '95.78',
	"Today's Open": '95.07',
	"Day's Range": '93.45-95.75',
	'Avg Vol (10-day)': '46.0M',
	'Last (time)': '4:00p ET 02/17/23',
	'Last (size)': '200'
} as { [key: string]: string };

const dataTwo = {
	'Market Cap': '1.2T',
	'Shares Oustanding': '12.8B',
	'EPS (TTM, GAAP)': '--',
	'P/E Ration (TTM, GAAP)': '--x',
	'Annual Dividend/Yield': 'No dividend',
	'Ex-dividend Date': 'No dividend'
} as { [key: string]: string };

function Index(props: any) {
	return (
		<div>
			<AppBar
				position="static"
				elevation={1}
				sx={{
					backgroundColor: 'white',
					color: 'black'
				}}
			>
				<Toolbar>
					<Box
						display="flex"
						gap={8}
						sx={{
							justifyContent: 'space-around',
							width: '100%'
						}}
					>
						<Box display="flex">
							<Typography
								variant="h4"
								component="h4"
								sx={{ fontWeight: 'bold' }}
							>
								GOOG
							</Typography>
							<Typography
								ml={1.5}
								mr={1}
								mt={1}
								variant="h6"
								component="h6"
								sx={{ fontWeight: 'bold' }}
							>
								94.59
							</Typography>
							<Typography
								variant="subtitle1"
								mt={2}
								color="red"
								sx={{ fontWeight: 'bold' }}
							>
								-1.19 (-1.24%)
							</Typography>
						</Box>

						<Box display="flex" gap={3} alignItems="center">
							<Button label="Buy" variant="primary" />
							<Button label="Sell" variant="primary-danger" />
							<SearchBar variant="outlined" className="searchBar" label="" />
						</Box>
					</Box>
				</Toolbar>
			</AppBar>

			<Box display="flex" justifyContent="space-around" mt={4}>
				<Box
					width="100%"
					display="flex"
					flexDirection="column"
					justifyContent="flex-start"
				>
					{Object.keys(data).map((key, index) => (
						<>
							<Box display="flex" justifyContent="space-between" mx={4}>
								<Typography my={1}>{key}</Typography>
								<Typography my={1}>{data[key]}</Typography>
							</Box>
							{index != Object.keys(data).length - 1 && (
								<Divider variant="middle" />
							)}
						</>
					))}
				</Box>

				<Box
					width="100%"
					display="flex"
					flexDirection="column"
					justifyContent="center"
				>
					{Object.keys(dataTwo).map((key: string, index: number) => (
						<>
							<Box display="flex" justifyContent="space-between" mx={4}>
								<Typography my={1}>{key}</Typography>
								<Typography my={1}>{dataTwo[key]}</Typography>
							</Box>
							{index != Object.keys(dataTwo).length - 1 && (
								<Divider variant="middle" />
							)}
						</>
					))}
				</Box>
			</Box>
		</div>
	);
}

export default Index;
