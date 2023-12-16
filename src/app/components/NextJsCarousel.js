'use client'

import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel autoPlay showArrows={true} infiniteLoop={true}>
                    <div>
                        <img src='/paper01.png' alt='Percutaneous Vertebral Augmentation for the Treatment of Osteoporotic Spinal Fractures'/>
                        <p className='legend'>Percutaneous Vertebral Augmentation for the Treatment of Osteoporotic Spinal Fractures</p>
                    </div>
                    <div>
                        <img src='/paper02.png' alt='A Comparison between Clinical Results of Selective Bundle and Double Bundle Anterior Cruciate Ligament Reconstruction'/>
                        <p className='legend'>A Comparison between Clinical Results of Selective Bundle and Double Bundle Anterior Cruciate Ligament Reconstruction</p>
                    </div>
                    <div>
                        <img src='/paper03.png' alt='Collagenous Ultrastructure of the Discoid Meniscus'/>
                        <p className='legend'>Collagenous Ultrastructure of the Discoid Meniscus</p>
                    </div>
                    <div>
                        <img src='/paper04.png' alt='Arthroscopic Stabilization for Displaced Lateral Clavicular Fractures: Can It Restore Anatomy?'/>
                        <p className='legend'>Arthroscopic Stabilization for Displaced Lateral Clavicular Fractures: Can It Restore Anatomy?</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}