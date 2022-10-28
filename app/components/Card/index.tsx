import {Text, View} from 'react-native';
import React, {memo, useState} from 'react';
import {styles} from './style';
import {Reaction} from 'react-native-reactions';
import {CardEmojiList, Strings} from './constants';
import {CardProps, EmojiItemProp} from './type';
import {useDispatch} from 'react-redux';
import {openCardEmoji} from '../../redux/actions/Actions';

const Footer = ({
  index,
  selectedEmoji,
  setSelectedEmoji,
  isCardOpen,
}: CardProps) => (
  <View style={styles.bottomContainer}>
    <Reaction
      onShowDismissCard={isCardOpen}
      type="modal"
      items={CardEmojiList}
      itemIndex={index}
      onTap={setSelectedEmoji}>
      <Text>{selectedEmoji ? selectedEmoji?.emoji : Strings?.like}</Text>
    </Reaction>
    <Text>{Strings?.comment}</Text>
    <Reaction
      type="modal"
      isCardOpen={isCardOpen}
      items={CardEmojiList}
      itemIndex={index}
      onTap={setSelectedEmoji}>
      <Text>{Strings?.share}</Text>
    </Reaction>
  </View>
);

const PostInformation = ({index}: CardProps) => (
  <View style={styles.reportContainer}>
    <Text>{Strings?.postLike}</Text>
    <View style={styles.commentshareContainer}>
      <Text>{Strings?.postComments}</Text>
      <Reaction type="modal" items={CardEmojiList} itemIndex={index}>
        <Text style={styles.shareText}>{Strings?.postShare}</Text>
      </Reaction>
    </View>
  </View>
);

const Card = ({index}: CardProps) => {
  const dispetch = useDispatch();
  const [selectedEmoji, setSelectedEmoji] = useState<EmojiItemProp>();
  const isCardOpen = (e: any) => {
    dispetch(openCardEmoji(!e));
  };
  return (
    <View style={styles.cardContainer}>
      {/* <Header index={index} isCardOpen={isCardOpen} />
      <View style={styles.postImageContainer}>
        <Image
          source={{uri: AppConstants?.postImagepath}}
          style={styles.postImage}
        />
      </View>
      <PostInformation index={index} /> */}
      <View style={styles.line} />
      <Footer
        isCardOpen={isCardOpen}
        index={index}
        selectedEmoji={selectedEmoji}
        setSelectedEmoji={setSelectedEmoji}
      />
    </View>
  );
};

export default memo(Card);
