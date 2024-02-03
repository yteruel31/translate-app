import { Button } from './components/Button/Button.tsx';
import { Main } from './components/Main/Main.tsx';
import { Card } from './components/Card/Card.tsx';
import { Container } from './components/Container/Container.tsx';
import { Grid } from './components/Grid/Grid.tsx';
import { Stack } from './components/Stack/Stack.tsx';
import { Group } from './components/Group/Group.tsx';
import { ActionIcon } from './components/ActionIcon/ActionIcon.tsx';
import { Divider } from './components/Divider/Divider.tsx';
import { TextArea } from './components/TextArea/TextArea.tsx';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Main>
      <Container>
        <Grid>
          <Grid.Col>
            <Card>
              <Stack>
                <Group align="center">
                  <Button variant="secondary" size="small">
                    Detect language
                  </Button>
                  <Button variant="secondary" size="small">
                    English
                  </Button>
                  <Button variant="secondary" size="small">
                    French
                  </Button>
                  <Button
                    rightIcon="ExpandDown"
                    variant="secondary"
                    size="small"
                  >
                    Spanish
                  </Button>
                </Group>
                <Divider />
                <Stack>
                  <TextArea
                    rows={10}
                    maxLength={500}
                    onChange={(e) => setCount(e.target.value.length)}
                  />
                  <Group justify="flex-end">
                    <span>{count}/500</span>
                  </Group>
                </Stack>
                <Group justify="space-between" align="flex-end">
                  <Group>
                    <ActionIcon icon={'SoundMaxFill'} />
                    <ActionIcon icon={'Copy'} />
                  </Group>
                  <Group justify="flex-end">
                    <Button leftIcon="SortAlfa">Translate</Button>
                  </Group>
                </Group>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col>
            <Card style={{ height: '100%' }}>
              <Stack justify="space-between" style={{ height: '100%' }}>
                <Stack>
                  <Group align="center">
                    <Button variant="secondary" size="small">
                      English
                    </Button>
                    <Button variant="secondary" size="small">
                      French
                    </Button>
                    <Button
                      rightIcon="ExpandDown"
                      variant="secondary"
                      size="small"
                    >
                      Spanish
                    </Button>
                  </Group>
                  <Divider />
                  <TextArea rows={10} readOnly />
                </Stack>
                <Group justify="space-between" align="flex-end">
                  <Group>
                    <ActionIcon icon={'SoundMaxFill'} />
                    <ActionIcon icon={'Copy'} />
                  </Group>
                </Group>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </Main>
  );
};

export default App;
