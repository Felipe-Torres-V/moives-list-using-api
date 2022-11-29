import styled from "styled-components";

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 280px;
    background-color: #df0707;
    box-shadow: 0 3px 10px 0 #0b0000;
    cursor: pointer;
`;
export const MoviePoster = styled.img`
    height: 362px;
    object-fit: cover;
`;
export const MovieTitle = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin: 15px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
export const InfoColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const MovieInfo = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: white;
    text-transform: capitalize;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;