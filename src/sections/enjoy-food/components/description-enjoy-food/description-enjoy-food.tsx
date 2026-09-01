import { NavLink } from 'react-router-dom'

import { Typography } from '@/components/ui/typography'

import styles from './description-enjoy-food.module.css'

export const DescriptionEnjoyFood = () => {
  return (
    <div className={styles.description}>
      <Typography variant="s" size="body_long" color="primary">
        &mdash; OVER 1000 USERS
      </Typography>
      <div className={styles.title}>
        <Typography variant="display" size="body_long" color="primary">
          Enjoy Foods
          <br />
          Over&nbsp;
        </Typography>
        <Typography variant="display" size="body_long" color="brand">
          World
        </Typography>
      </div>
      <Typography
        className={styles.descriptionText}
        variant="s"
        size="body_long"
        color="secondary"
      >
        Eatly help you set saving goals, earn cash back offers, Go to disclaimer
        for more details and get paychecks up to two days early. Get a
        {
          <NavLink className={styles.navLink} to="/bonus">
            $20 bonus
          </NavLink>
        }
        .
      </Typography>
    </div>
  )
}
