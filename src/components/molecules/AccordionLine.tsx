import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/ui/accordion.tsx'
import { useTranslation } from 'react-i18next'

interface AccordionLineProps {
  id: number
  title: string
  content: string
}
const AccordionLine = ({ id, title, content }: AccordionLineProps) => {
  const { t } = useTranslation()
  return (
    <AccordionItem value={id.toString()} className={' items-center space-x-2 w-full'}>
      <AccordionTrigger className={'px-2 py-4 decoration-transparent text-start'}>{t(title)}</AccordionTrigger>
      <AccordionContent className={'p-2'}>
        <p className={'font-black'}>Answer:</p>
        <p>{t(content)}</p>
      </AccordionContent>
    </AccordionItem>
  )
}

export default AccordionLine
