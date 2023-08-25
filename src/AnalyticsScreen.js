import React,{useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image, ScrollView, FlatList} from 'react-native';
import { Avatar} from 'react-native-paper';
import Svg, {Ellipse} from 'react-native-svg';
import { LineChart, XAxis, YAxis, Grid } from 'react-native-chart-kit';
import {BarChart} from 'react-native-chart-kit';
import {useNavigation} from '@react-navigation/native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import {PieChart} from 'react-native-chart-kit';
// const data = {
//     labels:['Jan','Feb', 'Mar','Apr','May','Jun'],
//     datasets: [
// {
//     data: [2000,2200,2400,2800,3400,5600],
// },
// ],
// };

//gender split
const genderData = [
  {
    name: 'Male',
    population: 70,
    color: '#2ecc71',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Fem',
    population: 30,
    color: '#e74c3c',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

//gender split
const genderData2 = [
  {
    name: 'Male',
    population: 60,
    color: '#2ecc71',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Fem',
    population: 40,
    color: '#e74c3c',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const AnalyticsScreen = ({navigation}) =>{
    const [countryData, setCountryData] = useState([]);
    useEffect(() =>{
        const mockData = [
          {country: 'USA', percentage: 40},
          {country: 'UK', percentage: 25},
          {country: 'Canada', percentage: 15},
        ];
        setCountryData(mockData);
    },[]);

    //Brand Affinity
    const [brandAffinityData, setBrandAffinityData] = useState([]);
    useEffect(()=>{
      const data1 = [
        {brand: 'Nike', percentage: 40},
        {brand: 'Reebok', percentage: 25},
        {brand: 'Zara', percentage: 15},
      ];
      setBrandAffinityData(data1);
    },[]);

    //follower interests
    const [followerInterest, setfollowerInterest] = useState([]);
    useEffect(() => {
      const data2 = [
        {brand: 'Friends', percentage: 40},
        {brand: 'Sports', percentage: 25},
        {brand: 'Camera', percentage: 10},
        {brand: 'Travel', percentage: 5},
      ];
      setfollowerInterest(data2);
    }, []);

    const renderCountryRow = ({item}) =>{
        const fillWidth = (item.percentage * 150) /100 ;
        return (
          <View style={{flexDirection: 'column', marginBottom: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Text style={{fontSize: 16}}>{item.country}</Text>
              <Text
                style={{fontSize: 16, color: '#3498db', fontWeight: 'bold'}}>
                {item.percentage}%
              </Text>
            </View>
            {countryData.length > 0 && (
              <View>
                <View
                  style={[
                    styles.fillLine,
                    { backgroundColor: '#cde'},
                  ]}
                />
                <View
                  style={[
                    styles.fillLine,
                    {width: fillWidth, backgroundColor: '#8e44ad'},
                  ]}
                />
              </View>
            )}
          </View>
        );
    }
   const data = {
     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
     datasets: [
       {
         data: [2000, 2200, 2400, 2800, 3400, 5600],
         color: (opacity = 1) => `rgba(134,65,244,${opacity})`,
       },
     ],
   };
    const data2 = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [1000, 1200, 2800, 2500, 1400, 3600],
          color: (opacity = 1) => `rgba(134,65,244,${opacity})`,
        },
      ],
    };
    const data3 = {
      labels: ['Apr 15', 'Apr 12', 'Apr 8', 'Apr 4', 'Apr 2', 'Mar 31'],
      datasets: [
        {
          data: [10, 15, 12, 17, 20, 18],
          color: (opacity = 3) => `rgba(148,0,211,1)`,
        },
      ],
    };
    const data4 = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [1000, 1200, 1400, 1500, 1300, 1200],
          color: (opacity = 1) => `rgba(134,65,244,${opacity})`,
        },
      ],
    };

    const mostUsedTags = ['#music','#cleamen','#clearxcr7','#study'];
    const mostUsedMentions = ['@user1','@user2','@user3'];
     const notableFollower = [
        {
          logoLink:
            "https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png",
          userInstaId: "nike",
          engagements: "153.3k",
          follower: "244M",
        },
        {
          logoLink:
            "https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg",
          userInstaId: "viratKholi",
          engagements: "3.1M",
          follower: "246.2M",
        },
      ];
    const notableLikers = [
        {
          logoLink:
            "https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png",
          userInstaId: "nike",
          engagements: "153.3k",
          follower: "244M",
        },
        {
          logoLink:
            "https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg",
          userInstaId: "viratKholi",
          engagements: "3.1M",
          follower: "246.2M",
        },
      ];
    const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
    decimalPlaces:0,
    color:(opacity=4 ) => `rgba(103, 58, 183, ${opacity})`,
    style:{
        borderRadius: 12,
    },
    propsForLabels: {
        fontSize: 10,
    },
    barPercentage: 0.9,
    // marginLeft: 10,
    marginTop: 10,
    };

    // const barProps = {
    //     width: 0.4,
    //     fromZero: true,
    //     showBarTops: true,
    // }

const lineProps = {
    strokeWidth: 50,
}
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <Svg height="100" width="100" style={styles.oval}>
            <Ellipse cx="100" cy="100" rx="80" ry="80" fill="white" />
          </Svg>
          <Avatar.Image
            size={130}
            source={require('./assets/download.jpeg')}
            style={styles.avatar}
          />
          <Text style={styles.text}>Kajal Jha</Text>
          <Text style={styles.text1}>Create or Account</Text>
          <View style={styles.boxesContainer}>
            <View style={styles.box}>
              <Text style={styles.boxNo}>8.5M</Text>
              <Text style={styles.boxText}>Avg Likes</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxNo}>578.2M</Text>
              <Text style={styles.boxText}>Followers</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxNo}>1.47%</Text>
              <Text style={styles.boxText}>Engagement Rate</Text>
            </View>
          </View>
          {/* popular posts */}
          <Text
            style={{
              marginLeft: -130,
              marginTop: 10,
              fontWeight: 600,
              color: 'black',
              fontSize: 15,
            }}>
            Popular Posts
          </Text>

          <View style={styles.boxesContainer}>
            <View style={styles.box1}>
              <Text style={styles.boxNo1}>Nov 15, 2022</Text>
              <Image
                source={require('./assets/leaves.jpg')}
                style={styles.post1}
              />
              <Text style={styles.boxText1}>
                A post office is a facility through which people can send
                parcels
              </Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.boxNo1}>Nov 15, 2022</Text>
              <Image
                source={require('./assets/leaves.jpg')}
                style={styles.post1}
              />
              <Text style={styles.boxText1}>
                A post office is a facility through which people can send
                parcels
              </Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.boxNo1}>Nov 15, 2022</Text>
              <Image
                source={require('./assets/leaves.jpg')}
                style={styles.post1}
              />
              <Text style={styles.boxText1}>
                A post office is a facility through which people can send
                parcels
              </Text>
            </View>
          </View>
          <View style={styles.boxesContainer}>
            <View style={styles.box1}>
              <Text style={styles.boxNo1}>Nov 15, 2022</Text>
              <Image
                source={require('./assets/leaves.jpg')}
                style={styles.post1}
              />
              <Text style={styles.boxText1}>
                A post office is a facility through which people can send
                parcels
              </Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.boxNo1}>Nov 15, 2022</Text>
              <Image
                source={require('./assets/leaves.jpg')}
                style={styles.post1}
              />
              <Text style={styles.boxText1}>
                A post office is a facility through which people can send
                parcels
              </Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.boxNo1}>Nov 15, 2022</Text>
              <Image
                source={require('./assets/leaves.jpg')}
                style={styles.post1}
              />
              <Text style={styles.boxText1}>
                A post office is a facility through which people can send
                parcels
              </Text>
            </View>
          </View>

          {/* followers by month graph */}
          <View
            style={{flexDirection: 'row', height: 290, paddingVertical: 30}}>
            <Text
              style={{
                marginLeft: -130,
                marginTop: -20,
                fontWeight: 600,
                color: 'black',
                fontSize: 15,
              }}>
              Followers by Month
            </Text>
            <LineChart
              data={data}
              width={370}
              height={210}
              //   yAxisLabel="$"
              yAxisSuffix=""
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
                strokeWidth: 3,
                showVerticalLines: false,
                // fillShadowGradient: `rgba(255,255,255,255)`,
                style: {
                  borderRadius: 16,
                },

                //   };
              }}
              bezier
              {...lineProps}
              style={styles.chart1}
            />
          </View>
          {/* graph of following by month */}

          <View
            style={{flexDirection: 'row', height: 290, paddingVertical: 30}}>
            <Text
              style={{
                marginLeft: -130,
                marginTop: -40,
                fontWeight: 600,
                color: 'black',
                fontSize: 15,
              }}>
              Following by Month
            </Text>
            <LineChart
              data={data2}
              width={370}
              height={239}
              //   yAxisLabel="$"
              yAxisSuffix=""
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
                strokeWidth: 3,
                showVerticalLines: false,
                style: {
                  borderRadius: 16,
                },

                //   };
              }}
              bezier
              {...lineProps}
              style={styles.chart}
            />
          </View>
          {/* bar graph */}
          <View style={{marginRight: 20}}>
            <Text style={styles.title}>Post Engagement</Text>
            <BarChart
              data={data3}
              width={368}
              height={250}
              chartConfig={chartConfig}
              style={{
                borderRadius: 16,
                marginLeft: -116,
                marginBottom: 45,
                borderWidth: 0.3,
                borderColor: 'black',
              }}
              // {...barProps}
            />
          </View>
          {/* graph of likes by month */}

          <View
            style={{flexDirection: 'row', height: 245, paddingVertical: 30}}>
            <Text
              style={{
                marginLeft: -100,
                marginTop: -50,
                fontWeight: 600,
                color: 'black',
                fontSize: 15,
              }}>
              Likes by Month
            </Text>
            <LineChart
              data={data4}
              width={250}
              height={190}
              //   yAxisLabel="$"
              yAxisSuffix=""
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
                strokeWidth: 3,
                showVerticalLines: false,
                // fillShadowGradient: `rgba(255,255,255,255)`,
                style: {
                  borderRadius: 16,
                },

                //   };
              }}
              bezier
              {...lineProps}
              style={styles.chart}
            />
          </View>

          {/* most used tags and mentions */}
          <View
            style={{
              padding: 16,
              backgroundColor: '#ffff',
              borderRadius: 8,
              borderWidth: 0.3,
              borderColor: 'black',
              width: 140,
              height: 305,
              marginTop: -250,
              marginLeft: 132,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 8}}>
              Most used Hashtags
            </Text>
            {mostUsedTags.map((tag, index) => (
              <Text
                key={index}
                style={{fontSize: 16, color: '#007bff', marginBottom: 4}}>
                {tag}
              </Text>
            ))}
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 8}}>
              Most Used Mentions
            </Text>
            {mostUsedMentions.map((mention, index) => (
              <Text
                key={index}
                style={{fontSize: 16, color: '#ff9900', marginBottom: 4}}>
                {mention}
              </Text>
            ))}
          </View>

          {/* influencer branch affinity */}
          <View
            style={{
              backgroundColor: '#fff',
              borderWidth: 0.3,
              borderColor: 'black',
              width: 250,
              height: 80,
              marginLeft: -124,
              marginTop: -83,
              marginBottom: 45,
              borderRadius: 4,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: 'black',
                marginBottom: 8,
                marginLeft: 7,
              }}>
              Influencer Branch Affinity
            </Text>
            <Text style={{marginLeft: 10, color: 'grey'}}>Nike</Text>
          </View>

          {/* Audience data by followers */}
          <View>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                fontWeight: 700,
                marginLeft: -112,
                marginTop: -24,
              }}>
              Audience data by followers
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#ffff',
              borderWidth: 0.3,
              //   borderColor: 'black',
              width: 150,
              height: 100,
              marginLeft: -124,
              marginTop: 5,
              marginBottom: 45,
              //   borderRadius: 4,
            }}>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                marginLeft: 42,
                marginTop: 10,
              }}>
              75.03%
            </Text>
            <Text style={{marginLeft: 35}}>Audience Credibility</Text>
          </View>

          {/* Pie-Chart */}
          <View
            style={{
              backgroundColor: '#fff',
              width: 220,
              marginBottom: -70,
              marginTop: -147,
              marginLeft: 40,
              borderWidth: 0.3,
              borderColor: 'black',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                // marginBottom: 19,
                marginLeft: -130,
                // marginTop: -24,
              }}>
              Gender Split
            </Text>
            <PieChart
              data={genderData}
              width={200}
              height={80}
              chartConfig={{
                color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              center={[0, 0]}
              absolute
            />
          </View>

          {/* Pie-Chart 2 */}
          <View
            style={{
              backgroundColor: '#fff',
              width: 220,
              // marginBottom: -730,
              // marginTop: 147,
              top: 545,
              marginLeft: 40,
              borderWidth: 0.3,
              borderColor: 'black',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                // marginBottom: 19,
                marginLeft: -130,
                // marginTop: -24,
              }}>
              Gender Split
            </Text>
            <PieChart
              data={genderData2}
              width={200}
              height={80}
              chartConfig={{
                color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              center={[0, 0]}
              absolute
            />
          </View>
          {/* Location by Country */}
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 20,
              marginRight: 210,
              marginLeft: -125,
              marginTop: -14,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
              Location By Country
            </Text>
            <FlatList
              data={countryData}
              keyExtractor={item => item.country}
              renderItem={renderCountryRow}
            />
          </View>
          {/* location by city */}
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 20,
              marginRight: 5,
              marginLeft: 85,
              marginTop: -220,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
              Location By City
            </Text>
            <FlatList
              data={countryData}
              keyExtractor={item => item.country}
              renderItem={renderCountryRow}
            />
          </View>

          {/* Brand Affinity */}
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 20,
              marginRight: 210,
              marginLeft: -125,
              marginTop: 12,
              marginBottom: 12,
              // marginTop: -64,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
              Followers Brand Affinity
            </Text>
            {brandAffinityData.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <Text style={{fontSize: 16}}>{item.brand}</Text>
                <Text
                  style={{fontSize: 16, color: '#3498db', fontWeight: 'bold'}}>
                  {item.percentage}
                </Text>
              </View>
            ))}
          </View>

          {/* Follower Interests */}
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 20,
              marginRight: 10,
              marginLeft: 75,
              marginTop: -192,
              marginBottom: 12,
              height: 184,
              // marginTop: -64,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>
              Follower Interests
            </Text>
            {followerInterest.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <Text style={{fontSize: 16, marginTop: 2}}>{item.brand}</Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 2,
                    color: '#3498db',
                    fontWeight: 'bold',
                  }}>
                  {item.percentage}
                </Text>
              </View>
            ))}
          </View>

          {/* Audience data by Likes */}
          <View>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                fontWeight: 700,
                marginLeft: -112,
                marginTop: -4,
              }}>
              Audience data by Likes
            </Text>
          </View>
          {/* Audience Crediability */}

          <View
            style={{
              backgroundColor: '#ffff',
              borderWidth: 0.3,
              //   borderColor: 'black',
              width: 150,
              height: 100,
              marginLeft: -124,
              marginTop: 5,
              marginBottom: 45,
              //   borderRadius: 4,
            }}>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                marginLeft: 42,
                marginTop: 10,
              }}>
              87.99%
            </Text>
            <Text style={{marginLeft: 39}}>Audience Credibility</Text>
          </View>
          {/* location by country */}
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 20,
              marginRight: 210,
              marginLeft: -125,
              marginTop: -27,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
              Location By Country
            </Text>
            <FlatList
              data={countryData}
              keyExtractor={item => item.country}
              renderItem={renderCountryRow}
            />
          </View>
          {/* Location by city */}
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 20,
              marginRight: 5,
              marginLeft: 85,
              marginTop: -220,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
              Location By City
            </Text>
            <FlatList
              data={countryData}
              keyExtractor={item => item.country}
              renderItem={renderCountryRow}
            />
          </View>
          {/* Follower by brand affinity */}
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 20,
              marginRight: 210,
              marginLeft: -125,
              marginTop: 12,
              marginBottom: 12,
              // marginTop: -64,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
              Followers Brand Affinity
            </Text>
            {brandAffinityData.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <Text style={{fontSize: 16}}>{item.brand}</Text>
                <Text
                  style={{fontSize: 16, color: '#3498db', fontWeight: 'bold'}}>
                  {item.percentage}
                </Text>
              </View>
            ))}
          </View>
          {/* Follower Interests */}
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 20,
              marginRight: 10,
              marginLeft: 75,
              marginTop: -192,
              marginBottom: 12,
              height: 184,
              // marginTop: -64,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>
              Follower Interests
            </Text>
            {followerInterest.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <Text style={{fontSize: 16, marginTop: 2}}>{item.brand}</Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 2,
                    color: '#3498db',
                    fontWeight: 'bold',
                  }}>
                  {item.percentage}
                </Text>
              </View>
            ))}
          </View>

          {/* List of Follower */}
          <View style={{width: 380, left: -124}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Notable Followers
            </Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 10,
                  borderBottomColor: 'rgba(152, 151, 151, 0.505)',
                  borderBottomWidth: 2,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Text style={{fontWeight: '500', fontSize: 15}}>
                    Influencers
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 15,
                        marginRight: 24,
                      }}>
                      Engagement
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontWeight: '500', fontSize: 15}}>
                      Followers
                    </Text>
                  </View>
                </View>
              </View>

              {notableFollower.map((ele, idx) => {
                return (
                  <View
                    key={idx}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 8,
                      borderBottomWidth: 2,
                      borderBottomColor: 'rgba(152, 151, 151, 0.505)',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <Image
                        source={{uri: ele.logoLink}}
                        style={{width: 50, height: 50, borderRadius: 25}}
                      />
                      <Text style={{color: 'rgb(30, 180, 239)'}}>
                        @{ele.userInstaId}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <Text style={{marginRight: 74}}>{ele.engagements}</Text>
                      </View>
                      <View>
                        <Text style={{marginRight: 7}}>{ele.follower}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          {/* List of Likers */}
          <View style={{width: 380, left: -124, marginTop: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Notable Likers
            </Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 10,
                  borderBottomColor: 'rgba(152, 151, 151, 0.505)',
                  borderBottomWidth: 2,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Text style={{fontWeight: '500', fontSize: 15}}>
                    Influencers
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 15,
                        marginRight: 24,
                      }}>
                      Engagement
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontWeight: '500', fontSize: 15}}>
                      Followers
                    </Text>
                  </View>
                </View>
              </View>

              {notableLikers.map((ele, idx) => {
                return (
                  <View
                    key={idx}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 8,
                      borderBottomWidth: 2,
                      borderBottomColor: 'rgba(152, 151, 151, 0.505)',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <Image
                        source={{uri: ele.logoLink}}
                        style={{width: 50, height: 50, borderRadius: 25}}
                      />
                      <Text style={{color: 'rgb(30, 180, 239)'}}>
                        @{ele.userInstaId}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <Text style={{marginRight: 74}}>{ele.engagements}</Text>
                      </View>
                      <View>
                        <Text style={{marginRight: 7}}>{ele.follower}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          {/* List of Looka Likes */}
          <View style={{width: 380, left: -124, marginTop: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Lookalikes (similar topics)
            </Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 10,
                  borderBottomColor: 'rgba(152, 151, 151, 0.505)',
                  borderBottomWidth: 2,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Text style={{fontWeight: '500', fontSize: 15}}>
                    Influencers
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 15,
                        marginRight: 24,
                      }}>
                      Engagement
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontWeight: '500', fontSize: 15}}>
                      Followers
                    </Text>
                  </View>
                </View>
              </View>

              {notableLikers.map((ele, idx) => {
                return (
                  <View
                    key={idx}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 8,
                      borderBottomWidth: 2,
                      borderBottomColor: 'rgba(152, 151, 151, 0.505)',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <Image
                        source={{uri: ele.logoLink}}
                        style={{width: 50, height: 50, borderRadius: 25}}
                      />
                      <Text style={{color: 'rgb(30, 180, 239)'}}>
                        @{ele.userInstaId}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <Text style={{marginRight: 74}}>{ele.engagements}</Text>
                      </View>
                      <View>
                        <Text style={{marginRight: 7}}>{ele.follower}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          {/* List of Audience */}
          <View style={{width: 380, left: -124, marginTop: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Audience Lookalikes
            </Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 10,
                  borderBottomColor: 'rgba(152, 151, 151, 0.505)',
                  borderBottomWidth: 2,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Text style={{fontWeight: '500', fontSize: 15}}>
                    Influencers
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 15,
                        marginRight: 24,
                      }}>
                      Engagement
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontWeight: '500', fontSize: 15}}>
                      Followers
                    </Text>
                  </View>
                </View>
              </View>

              {notableLikers.map((ele, idx) => {
                return (
                  <View
                    key={idx}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 8,
                      borderBottomWidth: 2,
                      borderBottomColor: 'rgba(152, 151, 151, 0.505)',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <Image
                        source={{uri: ele.logoLink}}
                        style={{width: 50, height: 50, borderRadius: 25}}
                      />
                      <Text style={{color: 'rgb(30, 180, 239)'}}>
                        @{ele.userInstaId}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <Text style={{marginRight: 74}}>{ele.engagements}</Text>
                      </View>
                      <View>
                        <Text style={{marginRight: 7}}>{ele.follower}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          {/* Sponsored posts */}
          <Text
            style={{
              marginLeft: -130,
              marginTop: 10,
              fontWeight: 600,
              color: 'black',
              fontSize: 15,
            }}>
            Sponsored Posts
          </Text>

          <View style={styles.boxesContainer}>
            <View style={styles.box1}>
              <Text style={styles.boxNo1}>Nov 15, 2022</Text>
              <Image
                source={require('./assets/leaves.jpg')}
                style={styles.post1}
              />
              <Text style={styles.boxText1}>
                A post office is a facility through which people can send
                parcels
              </Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.boxNo1}>Nov 15, 2022</Text>
              <Image
                source={require('./assets/leaves.jpg')}
                style={styles.post1}
              />
              <Text style={styles.boxText1}>
                A post office is a facility through which people can send
                parcels
              </Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.boxNo1}>Nov 15, 2022</Text>
              <Image
                source={require('./assets/leaves.jpg')}
                style={styles.post1}
              />
              <Text style={styles.boxText1}>
                A post office is a facility through which people can send
                parcels
              </Text>
            </View>
          </View>
          <View style={styles.boxesContainer}>
            <View style={styles.box1}>
              <Text style={styles.boxNo1}>Nov 15, 2022</Text>
              <Image
                source={require('./assets/leaves.jpg')}
                style={styles.post1}
              />
              <Text style={styles.boxText1}>
                A post office is a facility through which people can send
                parcels
              </Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.boxNo1}>Nov 15, 2022</Text>
              <Image
                source={require('./assets/leaves.jpg')}
                style={styles.post1}
              />
              <Text style={styles.boxText1}>
                A post office is a facility through which people can send
                parcels
              </Text>
            </View>
            <View style={styles.box1}>
              <Text style={styles.boxNo1}>Nov 15, 2022</Text>
              <Image
                source={require('./assets/leaves.jpg')}
                style={styles.post1}
              />
              <Text style={styles.boxText1}>
                A post office is a facility through which people can send
                parcels
              </Text>
            </View>
          </View>
          
        </View>
      </ScrollView>
    );
};
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    marginLeft: 135,
    marginTop: 45,
    // marginRight: -256,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  fillLine:{
    height: 2,
    backgroundColor: '#3498'
  },
  container3: {
    marginTop: 45,
    marginBottom: 45,
    marginRight: -56,
  },
  chart: {
    marginVertical: 8,
    marginTop: -20,
    borderRadius: 16,
    marginLeft: -130,
    borderWidth: 0.3,
    borderColor: 'black',
  },
  chart1: {
    marginVertical: 8,
    marginTop: 5,
    borderRadius: 16,
    marginLeft: -130,
    borderWidth: 0.3,
    borderColor: 'black',
  },
  post1: {
    width: 130,
    height: 100,
  },
  boxesContainer1: {
    marginTop: 20,
  },
  boxRow: {
    marginBottom: 20,
  },
  popularTag: {
    marginBottom: 10,
    fontSize: 18,
  },
  text: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,
    fontSize: 24,
    color: 'black',
  },
  text1: {
    fontSize: 15,
    marginLeft: 12,
  },
  oval: {
    position: 'absolute',
  },
  avatar: {
    zIndex: 1,
  },
  boxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: -131,
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 19,
    marginLeft: -380,
    marginTop: -24,
  },
  box: {
    width: 130,
    height: 100,
    backgroundColor: '#fffd',
    borderColor: 'black',
    borderWidth: 0.3,
  },
  box1: {
    width: 130,
    height: 200,
    backgroundColor: '#fffd',
    borderColor: 'black',
    borderWidth: 0.3,
  },
  boxNo: {
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 30,
    marginLeft: 35,
  },
  boxNo1: {
    fontSize: 15,
  },
  boxText: {
    fontWeight: '500',
    marginLeft: 28,
    marginTop: -1,
  },
  boxText1: {
    fontWeight: '500',
    marginLeft: 8,
    marginTop: 1,
  },
});
export default AnalyticsScreen;