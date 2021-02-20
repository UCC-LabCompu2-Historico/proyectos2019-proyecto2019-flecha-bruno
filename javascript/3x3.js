



    var a=new Array(3),b=new Array(3),c=new Array(3);

    var i,j;

    function gauss()

    { for(i=1;i<=3;i++)

    { a[i]=[0,0,0,0];b[i]=[0,0,0,0]; c[i]=[0,0,0,0];

        for(j=1;j<=4;j++)

    { a[i][j]=parseFloat(document.forms[0][4*i+j-5].value);
    if(isNaN(a[i][j]))a[i][j]=0;}

    }

        for(j=1;j<=4;j++)

    { b[1][j]=a[1][j];

        b[2][j]=a[1][1]*a[2][j]-a[2][1]*a[1][j] ;

        b[3][j]=a[1][1]*a[3][j]-a[3][1]*a[1][j] ;

        c[1][j]=b[1][j];

        c[2][j]=b[2][j];

        c[3][j]=b[2][2]*b[3][j]-b[3][2]*b[2][j] }

        for(i=1;i<=3;i++)

    { for(j=1;j<=4;j++)

    { document.forms[1][4*i+j-5].value=b[i][j] ;

        document.forms[2][4*i+j-5].value=c[i][j] }

    }

    }

    function res()

    {var x,y,z;

        gauss();

        z=c[3][4]/c[3][3];

        y=(c[2][4]-z*c[2][3])/c[2][2];

        x=(c[1][4]-y*c[1][2]-z*c[1][3])/c[1][1];

        alert("  x= "+x+"\n  y= "+y+"\n  z= "+z)

    }