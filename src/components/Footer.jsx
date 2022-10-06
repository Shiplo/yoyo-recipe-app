import React from 'react';
import styled from 'styled-components';
import { SiGithub, SiLinkedin, SiUpwork, SiFiverr } from "react-icons/si";


function Footer() {
  return (
    <FooterWrapper className='footer'>
        <div className='footer-left'>
            <p>&copy; Copyright {new Date().getFullYear() }. Created with React.</p>
        </div>
        <SocialWrapper className='footer-right'>
            <div className='creator'>
                <p>Profile:</p>
            </div>
            <div className='social'>
                <ul>
                    <li><a href={'https://github.com/Shiplo'} target={'_blank'} rel="noreferrer"><SiGithub /></a></li>
                    <li><a href={'https://www.linkedin.com/in/sofiqul-islam-68586795'} rel="noreferrer"><SiLinkedin /></a></li>
                    <li><a href={'https://www.upwork.com/freelancers/~0100f5c5138d974405'} rel="noreferrer"><SiUpwork /></a></li>
                    <li><a href={'https://www.fiverr.com/shiplor'} rel="noreferrer"><SiFiverr /></a></li>
                </ul>
            </div>
        </SocialWrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled('footer')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 20px  20px 20px;
    background: #469e7a;
    border-radius: 10px;
    font-size: 14px;
    line-height: 1.2em;
    color: #ddd;
    margin-bottom: 30px;

    p {
        margin: 0px;
    }
`;

const SocialWrapper = styled.div`
    display: flex;
    align-items: center;

    .creator {
        margin-right: 15px;
    }

    .social {

        ul {
            list-style: none;
            margin: 0px;
            padding: 0px;
            display: flex;

            li {
                &:not(:last-child) {
                    margin-right: 10px;
                }
                a {
                    color: #ddd;
                    transition: all 0.3s ease-in-out;

                    &:hover {
                        color: #fff;
                    }
                    svg {
                        display: block;
                        width: 20px;
                        height: 20px;
                    }
                }
                &:last-child {
                    svg {
                        width: 40px;
                        height: 40px;
                        margin: -10px 0px;
                    }
                }
            }
        }
    }
`;

export default Footer