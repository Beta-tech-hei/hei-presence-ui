import React from 'react';
import { Banner } from './components';
import Footer from './components/Footer';
import {Center, Grid, GridItem, Wrap, WrapItem} from "@chakra-ui/react";
import {Info} from "./components/Info";
import { Box } from '@primer/react';
import Navbar from './components/Navbar';


export const Landing = () => (
  <>
      <Navbar/>
      <Wrap display={"flex"} flexDirection={"row"} my={'auto'}>
          <WrapItem flexWrap={"wrap"}>
                  <Banner/>
                    <Info/>     
          </WrapItem>
      </Wrap>
      <Footer/>
  </>
);
