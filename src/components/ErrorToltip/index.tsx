import { Tooltip, TextTooltip } from './style';

export interface ErrorProps {
  error: any;
}

const ErrorToltip: React.FC<ErrorProps> = ({ error }: any): any => {
  return (
    <>
      {error.length > 0 && (
        <Tooltip>
          {error.map((err: any, index: any) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <TextTooltip key={index}>{err.message}</TextTooltip>
            );
          })}
        </Tooltip>
      )}
    </>
  );
};

export default ErrorToltip;
