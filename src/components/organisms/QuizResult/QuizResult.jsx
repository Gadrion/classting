import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import { QuizTimeClock } from 'components/organisms';
import { ResponsiveBar } from '@nivo/bar'
import { withContainer } from 'util/hoc';
import { QuizResultContainer } from 'containers/organisms';
import {
  QuizResultWrapper, QuizResulClockWrapper, QuizResulChartWrapper, QuizResulButtonWrapper,
} from './QuizResultStyled';

const QuizResult = ({
  hour, min, sec, onClick,
  barData, barKeys, quizResolveCount,
}) => (
  <QuizResultWrapper>
    <QuizResulClockWrapper>
      걸린 시간<QuizTimeClock hour={hour} min={min} sec={sec} />
    </QuizResulClockWrapper>
    <QuizResulChartWrapper>
      <div>{`문제 풀이 결과 이번 회차 - ${quizResolveCount}`}</div>
      <ResponsiveBar
        data={barData}
        keys={barKeys}
        indexBy="number"
        width={350}
        height={400}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.5}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '횟수',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 15,
          legendOffset: -40
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
          }
        ]}
      />
    </QuizResulChartWrapper>
    <QuizResulButtonWrapper>
      <Button variant="contained" onClick={onClick}>다시 Quiz 풀기</Button>
    </QuizResulButtonWrapper>
  </QuizResultWrapper>
)

QuizResult.propTypes = {
  hour: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  sec: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  barData: PropTypes.instanceOf(Array).isRequired,
  barKeys: PropTypes.instanceOf(Array).isRequired,
  quizResolveCount: PropTypes.number.isRequired,
}

export default withContainer(QuizResultContainer, QuizResult);
