
# Grid Prototype

An example and tool to help define layout specification and create code logic required for suggested grid layout in UX documents. Built with Javascript using [THREE JS](https://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene)

###Grid Rows 

Rows alternate from odd and even numbers to get the best visibility for each avatar, and also form an a more organic pattern to simulate a crowd to avoid military style rows.
The grid is currently set to 4 rows with 14 slots that can be occupied with avatars.   
  

###Row Spacing  

The spacing between each row has been set to the width of an avatar. This should be the minimum padding space between rows for ideal visibility of each avatar in the row behind.  
Should the default size of the avatar width change so should the minimum row spacing change to match.  

Row Spacing = Avatar WIDTH
  
  
###Avatars 

Avatar currently set to **4:3** aspect ratio to match majority of web cams. Any 16:9 web cams can simply be cropped. 
The width is set to a reasonable width to comply with the camera positioning along the Z axis and insure that the avatar is displayed at a reasonable size for UI interactions.

Current default avatar dimensions 

Avatar **WIDTH**  = 15px  
Avatar **HEIGHT** = WIDTH * 0.75 (4:30 aspect ratio)


###Window Resizing
On window resize, by default THREE JS adjust the camera field of view (FOV) to scale the objects in the scene.  
This is good for making sure the entire grid is visible at all times however it could also make the objects too small to view and to interact with. The FOV scaling on window resize can be be eliminated to present another alternative to make the padding between avatars correspond to window resize width to ensure they are displayed within the bounds of the window width.  
Most likely a combination of the two approaches is needed with logic to determine when and which approach is used.

You can toggle window resize scaling on/off in the UI controls in the top left. (The auto padding on window resize when scaling is off has not been implemented. You can use the x padding slider to adjust padding)



