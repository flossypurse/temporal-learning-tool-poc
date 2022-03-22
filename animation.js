$( document ).ready(function() {
    var canvas = document.getElementById("animation-canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle="#141414";
    workerProgressIds = ["worker-step-0","worker-step-1","worker-step-2","worker-step-3","worker-step-4","worker-step-5"];
    drawCluster();
    worker_started = false;

    $("#start-worker").click(function(){
      //playMusic();
      var functions = [
        step_one,
        step_two,
        step_three,
        step_four,
        step_five,
        step_six,
      ]
      var line_step_index = 0;
      var func_step_index = 0;
      step_zero();
      const func_step_id = setInterval(() =>{
        functions[func_step_index]();
        func_step_index++;
        if (func_step_index >= functions.length) {
          clearInterval(func_step_id);
          worker_started = true;
        }
      }, 2500)
      function step_zero() {
        $("#notification-container").html("Worker Process starts");
        $(".worker-step-" + line_step_index.toString()).addClass("highlight");
        ctx.font = "15px Arial"
        ctx.fillText("Worker Process", 915, 215)
        ctx.strokeRect(900, 225, 150, 150);

      }
      function step_one() {
        $("#notification-container").html("Temporal Client is created");
        $(".worker-step-" + line_step_index.toString()).removeClass("highlight");
        line_step_index++
        $(".worker-step-" + line_step_index.toString()).addClass("highlight");
        ctx.font = "10px Arial"
        ctx.fillText("Temporal Client", 942, 272)
        ctx.strokeRect(950, 280, 50, 50);
      }
      function step_two() {
        $("#notification-container").html("Worker Entity is created using the Temporal Client and Task Queue to poll");
        $(".worker-step-" + line_step_index.toString()).removeClass("highlight");
        line_step_index++
        $(".worker-step-" + line_step_index.toString()).addClass("highlight");
        ctx.font = "10px Arial"
        ctx.fillText("Worker Entity", 925, 242)
        ctx.strokeRect(925, 250, 100, 100);
      }
      function step_three() {
        $("#notification-container").html("Workflow Type is registered with the Worker Entity");
        $(".worker-step-" + line_step_index.toString()).removeClass("highlight");
        line_step_index++
        $(".worker-step-" + line_step_index.toString()).addClass("highlight");
        $("#workflow-definition-highlight-group").addClass("highlight-group");
        ctx.clearRect(930, 255, 90, 90);
      }
      function step_four() {
        $("#notification-container").html("Activity Type is registered with the Worker Entity");
        $(".worker-step-" + line_step_index.toString()).removeClass("highlight");
        $("#workflow-definition-highlight-group").removeClass("highlight-group");
        line_step_index++
        $(".worker-step-" + line_step_index.toString()).addClass("highlight")
        $("#activity-definition-highlight-group").addClass("highlight-group");
      }
      function step_five() {
        $(".worker-step-" + line_step_index.toString()).removeClass("highlight");
        $("#activity-definition-highlight-group").removeClass("highlight-group");
        line_step_index++
        $(".worker-step-" + line_step_index.toString()).addClass("highlight");
        $("#notification-container").html("Worker Entity starts polling the Task Queue");
        drawLineWithArrows(925,275,675,275,5,8,false,true);
        drawLineWithArrows(925,325,675,325,5,8,true,false);
      }
      function step_six() {
        $(".worker-step-" + line_step_index.toString()).removeClass("highlight");
      }
    });

    $("#start-workflow-execution").click(function() {
      if (!worker_started) {
        $("#notification-container").html("Start the Worker first for this simulation");
      } else {
        var functions = [
          step_one,
          step_two,
          step_three,
          step_four,
          step_five,
          step_six,
          step_seven,
          step_eight,
          step_nine,
          step_ten,
          step_eleven,
          step_twelve,
          step_thirteen,
          step_fourteen,
          step_fifteen,
          step_sixteen,
        ]
        var line_step_index = 0;
        var func_step_index = 0;
        step_zero();
        const func_step_id = setInterval(() =>{
          functions[func_step_index]();
          func_step_index++;
          if (func_step_index >= functions.length) {
            clearInterval(func_step_id);
          }
        }, 2500)
      }


      function step_zero() {
        $("#notification-container").html("Process starts");
        $(".execution-step-" + line_step_index.toString()).addClass("highlight");
        ctx.font = "15px Arial"
        ctx.fillText("Process", 165, 215)
        ctx.strokeRect(150, 225, 150, 150);
      }
      function step_one() {
        $("#notification-container").html("Temporal Client is created");
        $(".execution-step-" + line_step_index.toString()).removeClass("highlight");
        line_step_index++;
        $(".execution-step-" + line_step_index.toString()).addClass("highlight");
        ctx.font = "10px Arial";
        ctx.fillText("Temporal Client", 182, 242);
        ctx.strokeRect(175, 250, 100, 100);
      }
      function step_two() {
        $("#notification-container").html("Workflow Options are set, including the Task Queue name");
        $(".execution-step-" + line_step_index.toString()).removeClass("highlight");
        line_step_index++;
        $(".execution-step-" + line_step_index.toString()).addClass("highlight");
      }
      function step_three() {
        $("#notification-container").html("Call to spawn the Workflow Execution is made");
        $(".execution-step-" + line_step_index.toString()).removeClass("highlight");
        line_step_index++;
        $(".execution-step-" + line_step_index.toString()).addClass("highlight");
        drawLineWithArrows(275,275,525,275,5,8,false,true);
        $("#workflowexecutionstarted").removeClass("hidden");
      }
      function step_four() {
        $("#notification-container").html("Workflow Task is created and put into the Task Queue");
        $(".execution-step-" + line_step_index.toString()).removeClass("highlight");
        line_step_index++;
        $("#workflowtaskscheduled-1").removeClass("hidden");
        ctx.font = "10px Arial";
        ctx.fillText("Workflow Task", 582, 262);
        ctx.strokeRect(575, 275, 50, 50);
      }
      function step_five() {
        $("#notification-container").html("Worker Entity picks up Workflow Task and starts executing Workflow function");
        $(".execution-step-" + line_step_index.toString()).addClass("highlight");
        $("#workflowtaskstarted-1").removeClass("hidden");
        ctx.clearRect(530, 230, 140, 140);
        ctx.font = "10px Arial";
        ctx.fillText("Workflow Task", 942, 272)
        ctx.strokeRect(950, 280, 50, 50);
      }
      function step_six() {
        $("#notification-container").html("Activity Options are set, including required Timeout");
        $(".execution-step-" + line_step_index.toString()).removeClass("highlight");
        line_step_index++;
        $(".execution-step-" + line_step_index.toString()).addClass("highlight");
      }
      function step_seven() {
         $("#notification-container").html("Call to spawn Activity Execution is made, progress awaits on the result");
         $(".execution-step-" + line_step_index.toString()).removeClass("highlight");
         line_step_index++;
         $(".execution-step-" + line_step_index.toString()).addClass("highlight");
      }
      function step_eight() {
        $("#notification-container").html("Workflow Task completes, and an Activity Task is created");
        $(".execution-step-" + line_step_index.toString()).removeClass("highlight");
        ctx.clearRect(930, 255, 90, 90);
        $("#workflowtaskcompleted-1").removeClass("hidden");
        ctx.font = "10px Arial";
        ctx.fillText("Activity Task", 582, 262);
        ctx.strokeRect(575, 275, 50, 50);
        $("#activitytaskscheduled").removeClass("hidden");
      }
      function step_nine() {
        $("#notification-container").html("Worker picks up Activity Task and executes Activity function");
        line_step_index++;
        $(".execution-step-" + line_step_index.toString()).addClass("highlight");
        ctx.clearRect(530, 230, 140, 140);
        ctx.font = "10px Arial";
        ctx.fillText("Activity Task", 942, 272)
        ctx.strokeRect(950, 280, 50, 50);
        $("#activitytaskstarted").removeClass("hidden");
      }
      function step_ten() {
        $("#notification-container").html("Activty result is recorded to the ActivityTaskCompleted Event, Cluster creates a new Workflow Task");
        $(".execution-step-" + line_step_index.toString()).removeClass("highlight");
        line_step_index++;
        ctx.clearRect(930, 255, 90, 90);
        $("#activitytaskcompleted").removeClass("hidden");
        $("#workflowtaskscheduled-2").removeClass("hidden");
        ctx.font = "10px Arial";
        ctx.fillText("Workflow Task", 582, 262);
        ctx.strokeRect(575, 275, 50, 50);
      }
      function step_eleven() {
        $("#notification-container").html("Worker Entity picks up Workflow Task and resumes the Workflow function execution");
        $(".execution-step-" + line_step_index.toString()).addClass("highlight");
        $("#workflowtaskstarted-2").removeClass("hidden");
        ctx.clearRect(530, 230, 140, 140);
        ctx.font = "10px Arial";
        ctx.fillText("Workflow Task", 942, 272)
        ctx.strokeRect(950, 280, 50, 50);
      }
      function step_twelve() {
        $("#notification-container").html("Workflow function completes and returns with the result");
        $(".execution-step-" + line_step_index.toString()).removeClass("highlight");
        line_step_index++;
        $(".execution-step-" + line_step_index.toString()).addClass("highlight");
      }
      function step_thirteen() {
        $("#notification-container").html("Workflow Execution completes.");
        $(".execution-step-" + line_step_index.toString()).removeClass("highlight");
        line_step_index++;
        ctx.clearRect(930, 255, 90, 90);
        $("#workflowtaskcompleted-2").removeClass("hidden");
        $("#workflowexecutioncompleted").removeClass("hidden");
      }
      function step_fourteen() {
        $("#notification-container").html("Process now gets the result of the Workflow Execution");
        $(".execution-step-" + line_step_index.toString()).addClass("highlight");

        drawLineWithArrows(275,325,525,325,5,8,true,false);
      }
      function step_fifteen() {
        $("#notification-container").html("Hello World! is printed out");
        $(".execution-step-" + line_step_index.toString()).removeClass("highlight");
        line_step_index++;
        $(".execution-step-" + line_step_index.toString()).addClass("highlight");
      }
      function step_sixteen() {
        $(".execution-step-" + line_step_index.toString()).removeClass("highlight");
      }
    });

    function drawCluster() {
      ctx.font = "15px Arial"
      ctx.fillText("Temporal Cluster", 540, 215)
      ctx.strokeRect(525, 225, 150, 150);
    }

    // x0,y0: the line's starting point
    // x1,y1: the line's ending point
    // width: the distance the arrowhead perpendicularly extends away from the line
    // height: the distance the arrowhead extends backward from the endpoint
    // arrowStart: true/false directing to draw arrowhead at the line's starting point
    // arrowEnd: true/false directing to draw arrowhead at the line's ending point
    function drawLineWithArrows(x0,y0,x1,y1,aWidth,aLength,arrowStart,arrowEnd){
        var dx=x1-x0;
        var dy=y1-y0;
        var angle=Math.atan2(dy,dx);
        var length=Math.sqrt(dx*dx+dy*dy);
        //
        ctx.translate(x0,y0);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(length,0);
        if(arrowStart){
            ctx.moveTo(aLength,-aWidth);
            ctx.lineTo(0,0);
            ctx.lineTo(aLength,aWidth);
        }
        if(arrowEnd){
            ctx.moveTo(length-aLength,-aWidth);
            ctx.lineTo(length,0);
            ctx.lineTo(length-aLength,aWidth);
        }
        //
        ctx.stroke();
        ctx.setTransform(1,0,0,1,0,0);
    }

    function playMusic() {
      var audio = new Audio('ElseParis.mp3');
      audio.play();

    }
});
