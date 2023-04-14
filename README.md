
---
# install-package

    Markup :  # install-package #

  
    1.  react-router-dom
    2.  Recharts
    3.  Hero Icon
    4.  bootstrap
   
  

## Router nav 

  
```javascript

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/featuresJobs.json')
      },
      {
        path: "job/:jobId",
        element: <FeaturesDetails />,
        loader: () => fetch(`/featuresJobs.json`)
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/appliedjobs",
        element: <Appliedjobs />,
        loader: () => fetch(`/featuresJobs.json`)
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);


```



### Filter

    filter  : job all using filter
    
    
```javascript

  // filter part
  const [filter, setFilter] = useState('All');
  const filteredCart = filter === 'All' ? cart : cart.filter(c => c.work_area === filter);


```


#### See All btn 

    See All :  first slice data after click 



```javascript


 const [jobsData, setJobsData] = useState([]);
  const cardData = useLoaderData();
  useEffect(() => {
    if (cardData) {
      setJobsData(cardData.slice(0, 4));
    }
  }, []);
  const handleSetData = (id) => {
    addToDb(id);
  };

  const allData = (check) => {
    if (check) {
      setJobsData(cardData);
    }
  }
  allData(false);

```


live Link: : [https://github.io/](https://glowing-chimera-db0e43.netlify.app/)
