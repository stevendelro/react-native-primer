import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, image, thumbnail_image } = album;
  const {
    artistImageStyle,
    albumImageStyle,
    headerTextStyle,
    headerContentStyle,
    thumbnailContainerStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            source={{ uri: thumbnail_image }}
            style={artistImageStyle}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      
      <CardSection>
        <Image source={{ uri: image }} style={albumImageStyle} />
      </CardSection>

      <CardSection>
        <Button />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  artistImageStyle: {
    height: 50,
    width: 50
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default AlbumDetail;
