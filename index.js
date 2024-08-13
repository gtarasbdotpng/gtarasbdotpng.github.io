
* Copyright 2020 The Backstage Authors
3 *
4 * Licensed under the Apache License, Version 2.0 (the "License");
5 * you may not use this file except in compliance with the License.
6 * You may obtain a copy of the License at
7 *
8 *     http://www.apache.org/licenses/LICENSE-2.0
9 *
10 * Unless required by applicable law or agreed to in writing, software
11 * distributed under the License is distributed on an "AS IS" BASIS,
12 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
13 * See the License for the specific language governing permissions and
14 * limitations under the License.
15 */
16import React from 'react';
17import { HorizontalScrollGrid } from './HorizontalScrollGrid';
18
19const cardContentStyle = { height: 0, padding: 150, margin: 20 };
20const containerStyle = { width: 800, height: 400, margin: 20 };
21const opacityArray = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
22
23export default {
24  title: 'Layout/HorizontalScrollGrid',
25  component: HorizontalScrollGrid,
26};
27
28export const Default = () => (
29  <div style={containerStyle}>
30    <HorizontalScrollGrid>
31      {opacityArray.map(element => {
32        const style = { backgroundColor: `rgba(0, 185, 151, ${element})` };
33        return <div style={{ ...style, ...cardContentStyle }} key={element} />;
34      })}
35    </HorizontalScrollGrid>
36  </div>
37);
