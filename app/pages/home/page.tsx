import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="flex-1">
        <div className="w-full flex justify-center items-center ">
          <div className="w-[40%] mt-8 shadow-2xl rounded-[20px]">
            <div className="flex justify-between   h-[50vh] rounded-[20px]">
              <div className="w-full bg-[#413ef3] rounded-[20px] text-white flex justify-center items-center gap-10 flex-col">
                <div className="flex justify-center items-center top-0">
                  <h3>Your Result</h3>
                </div>
                <div className="flex justify-center flex-col items-center gap-6">
                  <div className="w-[150px] h-[150px] bg-[#3c39cc] rounded-full flex justify-center items-center ">
                    <div className="flex justify-center items-center flex-col">
                      <h4 className="text-4xl">76</h4>
                      <p> of 100</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <div className="flex justify-center items-center flex-col gap-6">
                      <h3>Great</h3>
                      <p className="text-center w-[230px]">
                        You scored higher than 65% of the people who have taken
                        these tests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="p-6">
                  <div className="mt-8 mb-6">
                    <h3 className="font-bold">Summary </h3>
                  </div>
                  <div className="flex justify-center items-center flex-col gap-4">
                    <div className="bg-red-100 w-full p-4 rounded-md">
                      <div className="flex justify-between items-center">
                        <div className="w-full">
                          <div className="flex justify-start items-center gap-2">
                            <Image
                              src="/images/icon-reaction.svg"
                              alt="reaction"
                              width={20}
                              height={10}
                            />
                            <div>
                              <h5 className="text-red-600 font-bold">
                                Reaction
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end items-center flex-row w-full">
                          <h5 className="">
                            <strong>80</strong> / <span>100</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-100 w-full  p-4 rounded-md">
                      <div className="flex justify-between items-center">
                        <div className="w-full">
                          <div className="flex justify-start items-center gap-2">
                            <Image
                              src="/images/icon-memory.svg"
                              alt="reaction"
                              width={20}
                              height={10}
                            />
                            <div>
                              <h5 className="text-yellow-600 font-bold">
                                Memory
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end items-center flex-row w-full">
                          <h5 className="">
                            <strong>92</strong> / <span>100</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-100 w-full  p-4 rounded-md">
                      <div className="flex justify-between items-center">
                        <div className="w-full">
                          <div className="flex justify-start items-center gap-2">
                            <Image
                              src="/images/icon-verbal.svg"
                              alt="reaction"
                              width={20}
                              height={10}
                            />
                            <div>
                              <h5 className="text-green-600 font-bold">
                                Verbal
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end items-center flex-row w-full">
                          <h5 className="">
                            <strong>61</strong> / <span>100</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-100 w-full  p-4 rounded-md">
                      <div className="flex justify-between items-center">
                        <div className="w-full">
                          <div className="flex justify-start items-center gap-2">
                            <Image
                              src="/images/icon-visual.svg"
                              alt="reaction"
                              width={20}
                              height={10}
                            />
                            <div>
                              <h5 className="text-blue-600 font-bold">
                                Visual
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end items-center flex-row w-full">
                          <h5 className="">
                            <strong>72</strong> / <span>100</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div>
                      <Button className="w-full rounded-[50px] p-8 bg-[#23233a]">
                        Continue
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
