import React from 'react';
import { projects } from '../constant/constants';

const Projects = () => (
    <main>
      
      <h1>Projects</h1>
      <div>
        {projects.map(({ id, image, title, description, tags, source, visit }) => (
          <div key={id}>
            <div src={image} />
            <div>
              <h3 title>{title}</h3>
              <div />
            </div>
            <div>{description}</div>
            <div>
              <h4>Stack</h4>
              <div>
                {tags.map((tag, i) => (
                  <div key={i}>{tag}</div>
                ))}
              </div>
            </div>
            <div>
              <div target="_blank" href={source}>Code</div>
              <div target="_blank" href={visit}>Live Site</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
  
  export default Projects;
 