import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, DataChart, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

const data = [];
for (let i = 1; i < 32; i += 1) {
  data.push({
    name: `Name ${i}`,
    strength: Math.sin(i / 2.0) * 4,
    risk: Math.cos(i / 2.0) * 4,
    cost: Math.abs(Math.cosh(i / 2.0) * 16) % 96,
    effort: i % 16,
  });
}

const Example = () => (
  <Grommet theme={grommet}>
    <Box align="center" justify="start" pad="large">
      <DataChart
        data={data}
        series={['name', 'strength', 'risk', 'cost', 'effort']}
        chart={{
          type: 'point',
          point: 'circle',
          property: {
            x: 'strength',
            y: 'risk',
            thickness: 'cost',
            // Want a way to take two color values and automatically generate
            // transformation
            color: {
              property: 'effort',
              transform: v =>
                `#${(16 - v).toString(16)}0${(4 + v).toString(16)}0${(
                  4 + v
                ).toString(16)}0`,
            },
          },
          opacity: 'strong',
        }}
        axis={{
          x: { granularity: 'medium' },
          y: { granularity: 'medium' },
        }}
        guide
        legend
      />
    </Box>
  </Grommet>
);

storiesOf('DataChart', module).add('Four Dimensions', () => <Example />);
