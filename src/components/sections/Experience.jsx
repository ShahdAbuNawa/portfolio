import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Timeline from '../ui/Timeline';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience">
      <Container>
        <SectionTitle
          eyebrow="// experience"
          title="Where I've worked"
          description="Hands-on frontend work in a live academic system, plus ongoing project-based learning through a competitive scholarship program."
        />
        <Timeline items={experience} />
      </Container>
    </section>
  );
}
