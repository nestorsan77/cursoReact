import React from 'react';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  return (
    <>
        <TwitterFollowCard isFollowing={true} usernName="nestorsan77" name="Nestor Calderón Pérez" initialIsFollowing={true}/>
        <TwitterFollowCard isFollowing={false} usernName="midudev" name="Nestor Calderón Pérez"/>
    </>
  );
}