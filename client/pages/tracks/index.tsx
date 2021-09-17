import { Button, Card, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const Index = () => {
  const router = useRouter()
  const tracks: ITrack[] = [
    {_id: '1', name: 'Track 1', artist: 'Artist 1', text: 'some text', listens: 6, audio: 'http://localhost:5000/audio/11.mp3', picture: 'http://localhost:5000/picture/22.jpg', comments: []}
  ]
  return (
    <>
      <MainLayout>
        <Grid container justifyContent="center">
          <Card className="card">
            <Box p={3}>
              <Grid container justifyContent="space-between">
                <h1>Список треков</h1>
                <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </MainLayout>
      <style>
        {`
          .card {
            width: 900px;
          }
        `}
      </style>
    </>
  );
};

export default Index;
