import {useTranslations} from 'next-intl';

export default function Index() {
  const t = useTranslations('IndexPage');
  return (
      <div>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
      </div>
  )
}