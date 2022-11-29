import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 40px 30px;
    justify-content: center;
    
`;
export const MoviePoster = styled.img`
    height: 352px;
    object-fit: cover;
    padding-right: 20px;
    padding-left: 20px;
    border-left: solid white;
`;
export const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
    border-left: solid white;
`;
export const MovieTitle = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin: 15px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-transform: capitalize;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
export const MovieInfo = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: white;
    margin: 4px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    text-transform: capitalize;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    & span{
        opacity: 0.5;
    }
`;