import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import Image from 'next/image';

const userJobs = [
  {
    logo: '/images/companies/aliare-logo.png',
    logoBackgrondColor: 'linear-gradient(132deg, rgba(2,244,243,1) 0%, rgba(9,9,121,1) 50%, rgba(0,255,87,1) 100%)',
    name: 'Aliare',
    occupation: 'Desenvolvedor Testes Unitários Júnior',
    testimonial:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
  },
  {
    logo: '/images/companies/compasso-uol-logo.png',
    logoBackgrondColor: 'linear-gradient(132deg, rgba(238,62,1,1) 27%, rgba(238,255,0,1) 100%);',
    name: 'Compasso UOL',
    occupation: 'Desenvolvedor Backend Júnior',
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    logo: '/images/companies/metta-logo.png',
    logoBackgrondColor: 'linear-gradient(148deg, rgba(162,1,238,1) 32%, rgba(255,0,183,1) 100%);',
    name: 'Metta',
    occupation: 'Estagiário Oracle Commerce Cloud',
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    logo: '/images/companies/fi-group-logo.png',
    logoBackgrondColor: 'linear-gradient(148deg, rgba(6,1,238,1) 32%, rgba(0,187,255,1) 100%);',
    name: 'FI Group',
    occupation: 'Desenvolvedor Java e Frontend Júnior',
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  }

];

export default class Referencias extends React.Component<{ theme: any, children?: any}, {}> {

  renderJobReview(job: any, index: number) {
    return (
      <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: 1,
            p: '0px',
          }}
        >
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {job.testimonial}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              pr: 2,
            }}
          >
            <CardHeader title={job.name} subheader={job.occupation}/>
          </Box>
          <Card style={{ border: '0px', justifyContent: 'center', display: 'flex', backgroundImage: job.logoBackgrondColor }}>
            <Image style={{ alignSelf: 'center', width: 'auto', height: '50px', fontSize: '600' ,margin: '16px' }} width={250} height={250} src={job.logo} alt={`Logo ${index + 1}`}/>
          </Card>
        </Card>
      </Grid>
    )
  }

  render(): React.ReactNode {
    return (
      <Container id="referenciasDeTrabalho"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}>
        
        <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' } }}>
          <Typography component="h2" variant="h4" color="text.primary">Referências de trabalho</Typography>
          <Typography variant="body1" color="text.secondary">
            Como tudo, o estudo e experiência sempre serão o melhor caminho para melhorar
            e nada melhor para adquirir experiência do que botar a mão na massa! 😁 
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent={'flex-start'}>
          { userJobs.map((job, index) => this.renderJobReview(job, index)) }
        </Grid>
      </Container>
    );
  }
}