import { processState } from '@/contants/processState.ts'
import ProcessState from '@/components/molecules/ProcessState.tsx'

interface Props {
  status: number
}

const ProcessHeader = ({ status }: Props) => {
  return (
    <div className={'grid md:grid-cols-7 bg-slate-50 mx-14 rounded p-2 sm:grid-cols-1 my-4'}>
      {processState.map((state, index) => (
        <ProcessState title={state.title} key={index} id={state.id} length={processState.length} status={status} />
      ))}
    </div>
  )
}

export default ProcessHeader
