import { getSectionAnimation } from '../animations';
import { HeroImage, Link, ListItem, Wrapper } from '../components';
import { getId } from '../utils/helper';
import { aboutSection, author } from '../utils/portfolio';
import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Victor Queiroga, an artist as well as crazy full stack
            web developer who wants to explore every tech stack.
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at a
            start-up -{' '}
            <Link
              href="https://der.pb.gov.br/"
              target="_blank"
              className="text-accent"
            >
              DERPB
            </Link>
            .
          </p>
          <p>
            My main focus these days is learning mobile development and finding
            a decent remote job.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
