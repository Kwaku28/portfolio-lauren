import AnimatedCursor from "react-animated-cursor"

const AnimateCursor = () => {
  return (
    <AnimatedCursor
      innerSize={15}
      outerSize={30}
      color='230, 197, 13'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}

      clickables={[
        'a',
        'button',
        'input[type="submit"]',
        'input[type="email"]',
        'input[type="text"]',
        'input[type="number"]',
        'textarea',
        'select',
        'link'
      ]}
    />
  )
}

export default AnimateCursor;
