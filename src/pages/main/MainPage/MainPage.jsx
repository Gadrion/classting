import React from 'react';
// import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { withContainer } from 'util/hoc';
import { MainPageContainer } from 'containers/pages';

const MainPage = () => (
	<div>
		<Button variant="contained">Quiz 풀기</Button>
	</div>
)

MainPage.defaultProps = {
	// name: '',
}

MainPage.propTypes = {
	// name: PropTypes.string,
};

export default withContainer(MainPageContainer, MainPage);
