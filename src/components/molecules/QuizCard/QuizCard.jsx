import React from 'react'
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const QuizCard = ({
  category, question,
  quizAnswers, selectAnswerValue, onChange, disabled,
}) => (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {category}
      </Typography>
      <Typography variant="h5" component="div" sx={{ marginBottom: '20px', marginTop: '10px' }}>
        {question}
      </Typography>
      <div>
        <FormControl component="fieldset" disabled={disabled}>
          <FormLabel component="legend">보기</FormLabel>
          <RadioGroup
            aria-label="example"
            value={selectAnswerValue}
            name="radio-buttons-group"
            onChange={onChange}
          >
            {quizAnswers.map((answer, index) => (
              <FormControlLabel key={answer} value={index} control={<Radio />} label={answer} />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </CardContent>
  </Card>
)

QuizCard.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  quizAnswers: PropTypes.instanceOf(Array).isRequired,
  selectAnswerValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default QuizCard;
