import { PageContainer } from '@/components/common/page-container'
import { ButtonController } from '@/sections/enjoy-food/components/button-controller'
import { DescriptionEnjoyFood } from '@/sections/enjoy-food/components/description-enjoy-food'

import styles from './enjoy-food.module.css'

export const EnjoyFood = () => {
  return (
    <PageContainer className={styles.container}>
      <DescriptionEnjoyFood />
      <ButtonController />
    </PageContainer>
  )
}
