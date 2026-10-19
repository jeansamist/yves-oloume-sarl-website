type ProcessStepsProps = {
  steps: { title: string; text?: string }[]
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="process-line">
      {steps.map((step, i) => (
        <li key={step.title}>
          <span>0{i + 1}</span>
          <h3>{step.title}</h3>
          {step.text && <p>{step.text}</p>}
        </li>
      ))}
    </ol>
  )
}
