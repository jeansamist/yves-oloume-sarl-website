import { Stagger, StaggerItem } from "../../motion/Stagger"

type ProcessStepsProps = {
  steps: { title: string; text?: string }[]
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <Stagger as="ol" className="process-line">
      {steps.map((step, i) => (
        <StaggerItem as="li" key={step.title}>
          <span>0{i + 1}</span>
          <h3>{step.title}</h3>
          {step.text && <p>{step.text}</p>}
        </StaggerItem>
      ))}
    </Stagger>
  )
}
