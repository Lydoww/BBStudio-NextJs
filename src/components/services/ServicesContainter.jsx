import { services } from './servicesData';
import ServicesClient from './ServicesClient';

const ServicesContainer = () => {
  return (
    <>
      <div className='sr-only'>
        <h3>Professional Services</h3>
        {services.map((service, idx) => (
          <article key={idx}>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <h5>{service.listHeader}</h5>
            <ul>
              {service.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <ServicesClient services={services} />
    </>
  );
};

export default ServicesContainer;
