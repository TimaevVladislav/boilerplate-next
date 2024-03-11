'use client'

import {useEffect, useState} from "react"
import factory from "@/../ethereum/factory"
import { Card, Button } from "semantic-ui-react"

export default function Contrasts() {

  const [campaigns, setCampaigns] = useState<string[]>([])

  const fetchCampaigns = () => {
      const campaign: any = factory.methods.getDeployedCampaigns.call(false)
      setCampaigns(campaign)

      return { campaigns }
  }

  const fetchCardDetails = () => {

  }

  useEffect( () => {
      fetchCampaigns()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Card.Group items={[]} />

        <Button
            content="Create campaign"
            icon="add circle"
            primary
        />
    </main>
  )
}
