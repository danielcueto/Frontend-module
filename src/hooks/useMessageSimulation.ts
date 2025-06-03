import { useEffect } from 'react';
import { useAppDispatch } from './useRedux';
import { receiveMessage } from '../features/chat/chatSlice';

const SIMULATION_INTERVAL = 2000;

const simulatedUsers = [
  'Ana García',
  'Carlos López', 
  'María Rodríguez',
  'Pedro Martínez',
  'Laura Sánchez',
  'Diego Morales'
];

const simulatedMessages = [
  '¿Alguien ha revisado los últimos cambios?',
  'Necesito ayuda con este bug',
  'La reunión se pospone 30 minutos',
  'Excelente trabajo en el último sprint',
  '¿Podemos hacer una call rápida?',
  'El deploy salió perfecto 🎉',
  'Hay un problema con el servidor de staging',
  'Ya subí los cambios al repo',
  'Gracias por la revisión del código',
  'El cliente está muy contento con los resultados',
  'Necesitamos actualizar la documentación',
  'Coffee break en 10 minutos ☕'
];

export const useMessageSimulation = (availableThreadIds: string[]) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (availableThreadIds.length === 0) return;

    const interval = setInterval(() => {

      const randomThreadId = availableThreadIds[
        Math.floor(Math.random() * availableThreadIds.length)
      ];

      const randomUser = simulatedUsers[
        Math.floor(Math.random() * simulatedUsers.length)
      ];
      
      const randomMessage = simulatedMessages[
        Math.floor(Math.random() * simulatedMessages.length)
      ];

      dispatch(receiveMessage({
        threadId: randomThreadId,
        author: randomUser,
        content: randomMessage
      }));
    }, SIMULATION_INTERVAL);

    return () => clearInterval(interval);
  }, [dispatch, availableThreadIds]);
};
