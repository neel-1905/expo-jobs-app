import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "@/components";
import { COLORS, icons, images, SIZES } from "@/constants";
import { useFetch } from "@/hooks/useFetch";
import { useRouter, useLocalSearchParams, Stack } from "expo-router";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  //   const data = [
  //     {
  //       job_title: "Software Engineer",
  //       employer_logo: "https://example.com/logo.png",
  //       employer_name: "Tech Corp",
  //       job_country: "United States",
  //       job_description:
  //         "We are looking for a passionate Software Engineer to design, develop, and maintain our web applications. You will be working with a team of talented engineers to build high-quality software solutions.",
  //       job_highlights: {
  //         Qualifications: [
  //           "Bachelor's degree in Computer Science or related field",
  //           "3+ years of software development experience",
  //           "Proficiency in JavaScript, HTML, CSS",
  //           "Experience with React.js and Node.js",
  //         ],
  //         Responsibilities: [
  //           "Develop and maintain web applications",
  //           "Collaborate with cross-functional teams",
  //           "Participate in code reviews and contribute to best practices",
  //           "Debug and troubleshoot software issues",
  //         ],
  //       },
  //     },
  //   ];

  //   const isLoading = false;
  //   const error = false;

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            qualifications={data[0]?.job_highlights?.Qualifications ?? ["N/A"]}
            title={data[0].job_title}
          />
        );

      case "About":
        return (
          <JobAbout info={data[0]?.job_description ?? "No data provided"} />
        );

      case "Responsibilities":
        return (
          <Specifics
            qualifications={
              data[0]?.job_highlights?.Responsibilities ?? ["N/A"]
            }
            title={`Responsibilities`}
          />
        );

      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimensions="60%"
              handlePress={() => router.back()}
              resizeMode="cover"
            />
          ),

          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimensions="50%"
              handlePress={() => router.back()}
              resizeMode="cover"
            />
          ),

          headerTitle: "",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong!</Text>
          ) : data.length === 0 ? (
            <Text>No data available!</Text>
          ) : (
            <View
              style={{
                padding: SIZES.medium,
                paddingBottom: 100,
              }}
            >
              <Company
                jobTitle={data[0]?.job_title}
                logo={data[0]?.employer_logo || images.jobPlaceholder}
                companyName={data[0]?.employer_name}
                location={data[0]?.job_country}
              />

              <JobTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabs={tabs}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <JobFooter
          url={
            data[0]?.job_google_link ??
            "https://careers.google.com/jobs/results"
          }
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
