import { useNProgress } from '@tanem/react-nprogress';
import Bar from './bar';
import Container from './container';

interface IRouteProgress {
  isAnimating: boolean;
}

const RouteProgress: React.FC<IRouteProgress> = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
};

export default RouteProgress;
