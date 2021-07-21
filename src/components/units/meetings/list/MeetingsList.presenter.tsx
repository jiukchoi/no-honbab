import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from './MeetingsList.styles'

const ListUI = ({inputText, setInputText}) => {
  const navigation = useNavigation()

  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        style={{position: 'absolute', bottom: 15, right: 25, zIndex: 1}}
        onPress={() => navigation.navigate('create')}>
        <Image source={require('../../../../../public/meetings/create-button.png')} />
      </TouchableOpacity>
      <View>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="검색어를 입력해주세요"
          maxLength={25}
        />
        <Image
          style={styles.searchImg}
          source={require('../../../../../public/meetings/search-bold.png')} />
      </View>
      <View style={styles.subView}>
        <Image
          style={styles.bannerImg}
          source={require('../../../../../public/meetings/banner.png')} />
        <Image
          style={styles.bannerRemarkImg}
          source={require('../../../../../public/meetings/banner-remark.png')} />
      </View>
      <View style={styles.subView}>
        <View style={styles.locationSubWrapper}>
          <Image
            style={{marginRight: 5}}
            source={require('../../../../../public/meetings/search-s.png')} />
          <Text
            style={{marginRight: 5, color: '#e63832', textDecorationLine: 'underline'}}
          >
            강남역
          </Text>
          <Text
            style={{marginRight: 5}}
          >
            주변 검색된 결과입니다.
          </Text>
        </View>
        <Text
          style={styles.searchMessage}
        >
          100+ 건이 검색되었습니다.
        </Text>
      </View>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <View style={styles.meetingWrapper}>
            <View style={styles.meetingLeftWrapper}>
              <Text style={{color: '#ffffff', fontWeight: 'bold'}}>한식</Text>
            </View>
            <View style={styles.meetingRightWrapper}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 250}}>
                <Text style={{color: '#e63832'}}>5일 뒤 모집 마감</Text>
                <View style={{flexDirection: 'row', width: 60, justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{color: '#bdbdbd'}}>모집원</Text>
                  <Text style={{color: '#e63832'}}>1/4</Text>
                </View>
              </View>
              <View style={{marginBottom: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>감자탕 먹을 사람 모여!</Text>
              </View>
              <View style={{paddingLeft: 30}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                  <Image
                    style={{marginRight: 10}}
                    source={require('../../../../../public/meetings/time.png')}
                  />
                  <Text>mm.dd (목) tt:tt ~ tt:tt </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Image
                    style={{marginRight: 10, marginTop: 3}}
                    source={require('../../../../../public/meetings/location.png')} />
                  <View>
                    <Text>일미집 역삼점</Text>
                    <Text style={{fontSize: 10, color: '#adada3'}}>서울 강남구 논현로 409 1층</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.meetingWrapper}>
            <View style={styles.meetingLeftWrapper}>
              <Text style={{color: '#ffffff', fontWeight: 'bold'}}>한식</Text>
            </View>
            <View style={styles.meetingRightWrapper}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 250}}>
                <Text style={{color: '#e63832'}}>5일 뒤 모집 마감</Text>
                <View style={{flexDirection: 'row', width: 60, justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{color: '#bdbdbd'}}>모집원</Text>
                  <Text style={{color: '#e63832'}}>1/4</Text>
                </View>
              </View>
              <View style={{marginBottom: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>감자탕 먹을 사람 모여!</Text>
              </View>
              <View style={{paddingLeft: 30}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                  <Image
                    style={{marginRight: 10}}
                    source={require('../../../../../public/meetings/time.png')}
                  />
                  <Text>mm.dd (목) tt:tt ~ tt:tt </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Image
                    style={{marginRight: 10, marginTop: 3}}
                    source={require('../../../../../public/meetings/location.png')} />
                  <View>
                    <Text>일미집 역삼점</Text>
                    <Text style={{fontSize: 10, color: '#adada3'}}>서울 강남구 논현로 409 1층</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View><View style={{alignItems: 'center'}}>
          <View style={styles.meetingWrapper}>
            <View style={styles.meetingLeftWrapper}>
              <Text style={{color: '#ffffff', fontWeight: 'bold'}}>한식</Text>
            </View>
            <View style={styles.meetingRightWrapper}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 250}}>
                <Text style={{color: '#e63832'}}>5일 뒤 모집 마감</Text>
                <View style={{flexDirection: 'row', width: 60, justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{color: '#bdbdbd'}}>모집원</Text>
                  <Text style={{color: '#e63832'}}>1/4</Text>
                </View>
              </View>
              <View style={{marginBottom: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>감자탕 먹을 사람 모여!</Text>
              </View>
              <View style={{paddingLeft: 30}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                  <Image
                    style={{marginRight: 10}}
                    source={require('../../../../../public/meetings/time.png')}
                  />
                  <Text>mm.dd (목) tt:tt ~ tt:tt </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Image
                    style={{marginRight: 10, marginTop: 3}}
                    source={require('../../../../../public/meetings/location.png')} />
                  <View>
                    <Text>일미집 역삼점</Text>
                    <Text style={{fontSize: 10, color: '#adada3'}}>서울 강남구 논현로 409 1층</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View><View style={{alignItems: 'center'}}>
          <View style={styles.meetingWrapper}>
            <View style={styles.meetingLeftWrapper}>
              <Text style={{color: '#ffffff', fontWeight: 'bold'}}>한식</Text>
            </View>
            <View style={styles.meetingRightWrapper}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 250}}>
                <Text style={{color: '#e63832'}}>5일 뒤 모집 마감</Text>
                <View style={{flexDirection: 'row', width: 60, justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{color: '#bdbdbd'}}>모집원</Text>
                  <Text style={{color: '#e63832'}}>1/4</Text>
                </View>
              </View>
              <View style={{marginBottom: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>감자탕 먹을 사람 모여!</Text>
              </View>
              <View style={{paddingLeft: 30}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                  <Image
                    style={{marginRight: 10}}
                    source={require('../../../../../public/meetings/time.png')}
                  />
                  <Text>mm.dd (목) tt:tt ~ tt:tt </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Image
                    style={{marginRight: 10, marginTop: 3}}
                    source={require('../../../../../public/meetings/location.png')} />
                  <View>
                    <Text>일미집 역삼점</Text>
                    <Text style={{fontSize: 10, color: '#adada3'}}>서울 강남구 논현로 409 1층</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ListUI